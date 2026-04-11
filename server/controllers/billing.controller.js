import razorpayInstance from "../config/razorpay.js";
import { PLANS } from "../config/plan.js";

export const billing = async (req, res) => {
  try {
    const { planType } = req.body;
    const userId = req.user._id;

    const plan = PLANS[planType];

    if (!plan || plan.price <= 0) {
      return res.status(400).json({ message: "Invalid paid plan" });
    }

    // Convert INR to paise (Razorpay requirement)
    const amount = plan.price * 100;

    const options = {
      amount: amount,
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
      notes: {
        userId: userId.toString(),
        planType: planType,
      },
    };

    const order = await razorpayInstance.orders.create(options);

    return res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Payment initiation failed",
    });
  }
};