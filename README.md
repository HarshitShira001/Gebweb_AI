# GenWeb.Ai 🚀

**GenWeb.Ai** is a premium, AI-powered website builder that generates production-grade, responsive, and stunning websites from simple text prompts. Built with modern web technologies, it offers a seamless experience from generation to deployment.

---



## 🌟 Key Features

- **AI Generation**: Uses DeepSeek (via OpenRouter) to build multi-page, responsive websites with professional typography and spacing.
- **Interactive Editor**: Real-time code editing using the Monaco Editor with instant live previews.
- **Smart Dashboard**: Manage your generated projects, track updates, and deploy with a single click.
- **Premium UI/UX**: Built with Framer Motion for smooth transitions and a high-end dark-themed aesthetic.
- **Credit System**: Integrated Razorpay payment gateway for buying generation credits (Pro/Enterprise plans).
- **Deployment**: Automatic slug generation and hosting simulation for your AI-created sites.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Editor**: @monaco-editor/react

### Backend
- **Runtime**: Node.js (Express)
- **Database**: MongoDB (Mongoose)
- **Authentication**: Firebase Google Auth + JWT (Secure Cookies)
- **AI Integration**: OpenRouter API (DeepSeek V3)
- **Payments**: Razorpay SDK

---

## 📂 Project Structure

```text
website_builder/
├── client/              # React + Vite application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components (Home, Editor, Generate, etc.)
│   │   ├── redux/       # Store and user slices
│   │   └── firebase.js  # Firebase initialization
├── server/              # Express + Node.js backend
│   ├── config/          # DB, Razorpay, AI, and Plan configs
│   ├── controllers/     # API logic handlers
│   ├── middleware/      # Auth and security middlewares
│   ├── model/           # Mongoose schemas (User, Website)
│   ├── routes/          # API endpoint definitions
│   └── index.js         # Entry point
└── .gitignore           # Root git exclusion file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Razorpay account (for test keys)
- OpenRouter API key
- Firebase project (for Google Auth)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd website_builder
   ```

2. **Setup the Server**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` folder:
   ```env
   PORT=8000
   MongoDB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   OPENROUTER_API_KEY=your_openrouter_key
   FRONTEND_URL=http://localhost:5173
   RAZORPAY_API_KEY=your_razorpay_key
   RAZORPAY_SECRET_KEY=your_razorpay_secret
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
   ```

3. **Setup the Client**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` folder:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_key
   VITE_RAZORPAY_KEY_ID=your_razorpay_key
   ```

### Running the Application

1. **Start the Backend**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend**
   ```bash
   cd client
   npm run dev
   ```

---

## 🎨 Design Principles
- **Aesthetic**: Modern, high-contrast dark mode.
- **Responsive**: Mobile-first design for all generated websites.
- **Performance**: Single Page Application (SPA) feel with minimal reloads.

---

## 👤 Author
- **Name**: Harshit Shira
- **Email**: [harshitshira48@gmail.com](mailto:harshitshira48@gmail.com)

## 📜 License
This project is for demonstration purposes. [ISC License](LICENSE).

---
