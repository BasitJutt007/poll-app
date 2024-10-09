# 📝 Multi-Step Poll App 🎉

Welcome to the **Multi-Step Poll App** – a sleek, interactive, and fully-featured poll application built with **React**, **Redux**, **React Query**, and **Tailwind CSS**. You can ask questions, click on emojis, submit answers, and see a cool summary. 🚀

---

## 🎯 Project Overview

This project was built to demonstrate a multi-step poll form where users can select answers using emojis, navigate through steps, and submit their answers to an API. They can also reset the poll and start over. We've also got some pretty awesome animations and toast notifications to keep things fun! 🎈

### ✨ Features

- **Multi-step form with a custom carousel** 🎡
- **Interactive emoji-based answers** 😄 😎 😍
- **State management with Redux Toolkit** 📦
- **API integration with React Query** 🔗
- **Responsive UI built with Tailwind CSS** 🌈
- **Success and error toasts** via React Hot Toast 🔔
- **Reset functionality** to start the poll again ♻️

---

## ⚙️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **State Management**: Redux Toolkit
- **API Handling**: React Query, Axios
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast

---

## 🛠️ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/multi-step-poll-app.git
cd multi-step-poll-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the app. 🌍

## 🚀 Project Functionality

### Multi-Step Poll Form 📋

- Navigate through each step with cool transitions 🎢.
- Select your answers with fun emojis 😄.
- Click Submit and watch the magic happen ✨ (Your data will be sent to a fake API).
- Get a summary of your answers in a neat layout 📝.

### Toast Notifications 🔔

- Successful submissions get a friendly toast notification 🥳.
- Errors? Don't worry, you'll see an error toast too 😅.

### Reset the Poll ♻️

- Click Poll Again to reset the entire poll and start fresh!

## 📚 Folder Structure

```bash
src/
│
├── components/
│   ├── MultiStepForm.jsx         # Main multi-step form component
│   ├── SummaryScreen.jsx         # Summary component showing answers
│   └── common/                   # Shared components like CustomButton
│
├── redux/
│   ├── pollSlice.js              # Redux slice for poll state management
│   └── store.js                  # Redux store configuration
│
├── config/
│   └── stepsConfig.js            # Configuration for poll steps and options
│
├── App.js                        # Root component
└── index.js                      # Entry point for React app
```

## 💡 Ideas for Improvements

- 🔄 Add user authentication for storing polls.
- 📊 Show poll results with statistics after submission.
- 🌐 Integrate with a real API or database.

## 📸 Screenshots

Multi-step Poll Form:
<img width="1512" alt="Screenshot 2024-10-09 at 10 20 19 PM" src="https://github.com/user-attachments/assets/cb3c0ad1-7992-4b7c-af43-238b2d2eb605">


Summary Page:
<img width="1512" alt="Screenshot 2024-10-09 at 10 21 21 PM" src="https://github.com/user-attachments/assets/aec350f2-458b-491c-9742-f85d5a3ff574">


## 🤝 Contributing

Feel free to fork this repo, make improvements, and create pull requests! Contributions are more than welcome 💡.

## 📜 License

This project is licensed under the MIT License – see the LICENSE file for details.
