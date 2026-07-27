# food-recipe-app
A full-stack Food Recipe web application built with React.js, Node.js, Express.js, and MongoDB Atlas. Users can search recipes, view details, and manage favorite recipes.

# 🍽️ Food Recipe App

A modern **Full Stack Food Recipe Web Application** built using **React.js**, **Node.js**, **Express.js**, and **MongoDB Atlas**. The application allows users to search recipes, browse categories, view detailed recipe information, and save their favorite recipes permanently.

---

# 📌 Project Overview

The Food Recipe App is designed to help users discover delicious vegetarian recipes through a clean and responsive interface. Users can search recipes by name, filter them by category, view complete recipe details, and manage their favorite recipes.

The frontend is developed using **React.js**, while the backend is built with **Node.js** and **Express.js**. Favorite recipes are stored in **MongoDB Atlas** using REST APIs.

---

# ✨ Features

- 🔍 Search recipes by name
- 📂 Filter recipes by category
- 📖 View complete recipe details
- ❤️ Add recipes to Favorites
- ❌ Remove recipes from Favorites
- 💾 Favorites stored in MongoDB Atlas
- ⚡ REST API Integration
- 📱 Responsive User Interface
- 🍽️ Multiple Indian Vegetarian Recipes
- 🖼️ Recipe Images
- 🚀 Fast and Simple UI

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Router DOM
- Fetch API

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB Atlas
- Mongoose

---

## Tools Used

- Visual Studio Code
- Git
- GitHub
- Postman
- MongoDB Atlas

---

# 📂 Folder Structure

```
Food-Recipe-App
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── config
│   ├── data
│   ├── images
│   ├── app.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yashviparmar03/food-recipe-app.git
```

---

## 2️⃣ Install Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 3️⃣ Install Backend

```bash
cd backend
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
MONGO_URI=Your_MongoDB_Atlas_Connection_String
```

Example

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/foodrecipe
```

---

# 🔗 REST APIs

## Recipes

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/recipes | Get All Recipes |
| GET | /api/recipes/:id | Get Recipe by ID |

---

## Categories

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/categories | Get All Categories |

---

## Favorites

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/favorites | Get Favorite Recipes |
| POST | /api/favorites | Add Favorite Recipe |
| DELETE | /api/favorites/:id | Remove Favorite Recipe |

---

# ❤️ Main Functionalities

- Search recipes
- Browse categories
- View recipe details
- Save favorite recipes
- Delete favorite recipes
- MongoDB database integration
- REST API communication
- Responsive Design

---

# 🚀 Future Enhancements

- 👤 User Authentication
- 🔐 JWT Login & Signup
- ⭐ Recipe Ratings
- 💬 Comments Section
- 🥗 Nutrition Information
- 🌙 Dark Mode
- 📱 Progressive Web App (PWA)

---

# 👩‍💻 Author

**Yashvi Parmar**

### GitHub

https://github.com/yashviparmar03

### LinkedIn

https://www.linkedin.com/in/yashvi-parmar-a36665290/

---

# 📄 License

This project is developed for learning, educational, and portfolio purposes.

---

# ⭐ Show Your Support

If you like this project, don't forget to ⭐ the repository.
