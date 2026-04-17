import crypto from "crypto";
import User from "../model/user.model.js";
import { PLANS } from "../config/plan.js";
import razorpayInstance from "../config/razorpay.js";

export const razorpayWebhook = async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  const signature = req.headers["x-razorpay-signature"];

  try {
    // Razorpay sends raw body, so req.body must NOT be parsed JSON
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(req.body)
      .digest("hex");

    if (expectedSignature !== signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    const event = JSON.parse(req.body.toString());

    // Payment successful event
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;

      let userId = payment.notes?.userId;
      let plan = payment.notes?.planType;

      // Fallback: If payment notes are missing, fetch the order notes
      if (!userId && payment.order_id) {
        try {
          const order = await razorpayInstance.orders.fetch(payment.order_id);
          userId = order.notes?.userId;
          plan = order.notes?.planType;
        } catch (err) {
          console.error("Error fetching order for webhook:", err);
        }
      }

      const credits = PLANS[plan]?.credits ?? 0;

      if (userId) {
        await User.findByIdAndUpdate(userId, {
          $inc: { credits },
          plan,
        });
      }
    }

    return res.json({ received: true });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "webhook error" });
  }
};