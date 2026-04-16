# 🚀 CourseHub – Full Stack Course Selling Platform

A modern **MERN Stack (MongoDB, Express, React, Node.js)** based platform where users can explore, purchase, and review courses, while admins manage course content.

---

## 🌐 Live Preview

> Coming Soon 🚀

---

## 📸 Features

### 👤 User Features

* 🔐 Authentication (Signup / Login / Logout)
* 👨‍💼 User Profile with Avatar
* 📚 Browse Courses
* 💳 Purchase Courses
* ⭐ Add Reviews & Ratings
* 💬 Comment on Courses
* 📦 View Purchased Courses

---

### 👨‍💼 Admin Features

* 📊 Admin Dashboard
* ➕ Add / Delete Courses
* 👥 Manage Users
* 📦 View Orders

---

## 🧱 Tech Stack

### Frontend

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🔁 React Router
* 🌐 Axios

### Backend

* 🟢 Node.js
* 🚀 Express.js
* 🍃 MongoDB + Mongoose
* 🔐 JWT Authentication

---

## 📁 Folder Structure

```
client/
 ├── src/
 │    ├── components/
 │    ├── pages/
 │    ├── context/
 │    ├── services/
 │    ├── layouts/
 │    ├── App.jsx
 │    └── main.jsx

server/
 ├── src/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── middlewares/
 │    ├── utils/
 │    ├── app.js
 │    └── index.js
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```bash
git clone https://github.com/mark-j-yadav/Course-Selling-platform.git
cd coursehub
```

---

### 🔹 2. Backend Setup

```bash
cd server
npm install
```

#### Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

#### Run Backend:

```bash
npm run dev
```

---

### 🔹 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔐 API Endpoints (Sample)

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`
* `GET /api/users/me`

### Courses

* `GET /api/courses`
* `GET /api/courses/:id`
* `POST /api/courses` (Admin)

### Orders

* `POST /api/orders`
* `GET /api/orders/my`

---

## 🧠 Key Concepts Used

* MVC Architecture
* Context API for State Management
* Protected Routes (Auth + Admin)
* RESTful APIs
* Middleware-based Security
* JWT Token Authentication

---

## 🎯 Future Improvements

* 💳 Payment Integration (Razorpay / Stripe)
* 📧 Email Notifications
* 🔍 Search & Filter Courses
* 📱 Fully Responsive UI
* 🌍 Deployment (Vercel + Render)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Mark J Yadav**
💼 Full Stack Developer
🚀 Building SaaS & Startup Projects

---

## ⭐ Show Your Support

If you like this project:

👉 Star ⭐ this repo
👉 Share with others
👉 Build something awesome 🚀
