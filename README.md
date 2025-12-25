# 🎨 Artisy – Creative Image Sharing Platform (Frontend)

Artisy is a modern creative platform where artists can showcase their work, explore visual inspiration, and connect with others.  
This repository contains the **frontend application** built using **React, Redux Toolkit, Tailwind CSS, and Vite**.

🌐 **Live Website:** https://artisy-gallery.vercel.app  

🌐 **Backend :** https://github.com/RickOnJava/ARTISY-backend 

---

## 🚀 Features

### 🔐 Authentication
- Secure Login & Signup
- JWT-based authentication
- Protected routes
- Auto logout on token expiry

### 🖼️ Image Experience
- Masonry-style image feed
- Image modal with:
  - Likes & dislikes
  - View counter
  - Artist info
- Upload images with mood selection

### 👤 User Profiles
- Public profile pages
- Profile view counter
- User-specific image gallery

### 🎨 UI & UX
- Fully responsive design
- Modern gradient UI
- Smooth transitions & animations

---

## 🧠 Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios

**UI & UX**
- ShadCN UI components
- Lucide Icons
- Custom gradient design system

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/your-username/ARTISY-frontend.git

cd ARTISY-frontend


2️⃣ Install dependencies 

npm install


3️⃣ Setup environment variables 

Create a .env file in the root

VITE_API_URL=https://your-backend-url.onrender.com/api


4️⃣ Run the development server 

npm run dev


App will run on

http://localhost:5173


🔄 Redux Architecture

authSlice → login, signup, logout, auth state

imageSlice → fetch images, reactions, moods

All API calls handled via createAsyncThunk.

---

🧭 Application Flow

User signs up / logs in

JWT stored securely

Homepage loads random image feed

Clicking image opens modal (likes, views, artist info)

Users can:

Upload images

View profiles

Filter by mood

All actions sync in real-time with backend

---

🎯 Key Highlights

Clean and scalable architecture

Optimized API usage

Production-grade UI

Fully responsive design

Easy backend integration

---

##📸 Screenshots

<img width="1900" height="914" alt="Screenshot 2025-12-25 212929" src="https://github.com/user-attachments/assets/0f03adc8-eba3-4c42-9b22-d4e5dd5217aa" />

---

🙌 Author

RICK GHOSH

Full Stack Developer

📧 devwithrick404@gmail.com

🌐 https://rick-ghosh.netlify.app
