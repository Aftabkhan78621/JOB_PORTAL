

# JOB PORTAL – Smart Hiring Platform (MERN Stack)

Meet **JOB PORTAL** — a modern, full-stack job hiring platform designed to make
**job searching, hiring, and recruitment faster, smarter, and more efficient**.

Whether you're a **job seeker** looking for opportunities or a **recruiter**
managing job postings and applications, Job Portal simplifies the entire hiring
process through a clean UI and powerful backend APIs.


## 🚀 What Can Job Portal Do?

### 👤 For Job Seekers
- Create and manage user profiles
- Browse and search jobs by category
- View detailed job descriptions
- Apply for jobs in real time
- Track applied jobs in one place

### 🏢 For Recruiters & Companies
- Register and manage company profiles
- Post new job openings
- Manage job listings
- View and manage job applications

- ## 💡 Why Job Portal?

- Clean and responsive UI for a smooth user experience
- Secure authentication using JWT
- Role-based access (User / Recruiter)
- Real-time job data handling
- Scalable backend with MongoDB & Express
- Built with industry-standard MERN architecture

> Job Portal is not just a CRUD application —  
> it’s a complete hiring solution built to simulate real-world job platforms.
>
> ## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer & Cloudinary

## 📂 Project Structure

JOB_PORTAL/
│── BACKEND/
│── FRONTEND/
│── .gitignore
│── README.md
JOB_PORTAL/
│
│── BACKEND/
│ ├── Controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── index.js
│ ├── package.json
│ └── README.md
│
│── FRONTEND/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── redux/
│ │ ├── Hooks/
│ │ └── utils/
│ ├── package.json
│ ├── vite.config.ts
│ └── README.md
│
│── .gitignore
│── README.md

🔧 Backend Setup
cd BACKEND
npm install


Environment Variables
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

npm run dev

🔐 Security Notes
.env files are ignored using .gitignore
node_modules are never pushed to GitHub
Sensitive credentials are kept secure

🚀 Deployment Plan
Frontend → Vercel
Backend → Render
Same GitHub repository used with different root directories



## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aftabkhan78621/JOB_PORTAL.git
cd JOB_PORTAL


## 🎯 Purpose of This Project

This project is built to:
- Practice full-stack MERN development
- Understand real-world authentication & APIs
- Build a resume-ready portfolio project
- Prepare for full-stack developer interviews


## 👨‍💻 Author

**Aftab Khan**  
MERN Stack Developer  
Final Year B.Tech Student

If you find this project useful, feel free to ⭐ star the repository
and explore the codebase.



