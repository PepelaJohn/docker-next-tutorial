


# **Next.js Authentication App with MongoDB & Docker**  

🚀 A simple authentication system using **Next.js**, **MongoDB**, and **Docker**. This project includes user **Login & Logout** functionality, a **Dashboard** for authenticated users, **MongoDB** for storing user data, and **Docker & Docker Compose** for containerization.  

## **Technologies Used**  
- **Next.js 14** – Server-side rendering & API routes  
- **MongoDB** – Database for user storage  
- **Mongoose** – ODM for MongoDB  
- **NextAuth.js** – Authentication  
- **Tailwind CSS** – Styling  
- **Docker & Docker Compose** – Containerization  

## **Features**  
✅ **User Registration & Login**  
✅ **Secure Authentication with NextAuth.js**  
✅ **JWT-based Sessions**  
✅ **Protected Dashboard Route**  
✅ **Dockerized Next.js & MongoDB Setup**  

## **Installation**  

### **Clone the repository**  
```sh
git clone https://github.com/yourusername/nextjs-auth-docker.git
cd nextjs-auth-docker
```

### **Install dependencies**  
```sh
npm install
```

### **Set up environment variables**  
Create a `.env.local` file and add the following variables:  

# MongoDB connection
MONGODB_URI=mongodb://localhost:27017/nextauth

# NextAuth Secret (Use a random string)
NEXTAUTH_SECRET=your-random-secret-key

# NextAuth Provider (GitHub example, you can use others)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

## **Running the App Locally**  
Start MongoDB (if not using Docker):  
```sh
mongod --dbpath=data
```

Run the Next.js app:  
```sh
npm run dev
```

App should now be available at: **`http://localhost:3000`** 🎉  

## **Running with Docker**  

### **Build and Run with Docker Compose**  
If you prefer to run the app with **Docker**, use:  
```sh
docker-compose up --build
```

### **Verify Running Containers**  
```sh
docker ps
```

You should see two containers:  
✅ **nextjs-app** (on port 3000)  
✅ **mongodb** (on port 27017)  

## **Project Structure**  

```
nextjs-auth-docker/
│── components/        # UI components
│── pages/
│   ├── api/
│   │   ├── auth/      # NextAuth authentication routes
│   │   ├── user.js    # API route for user data
│   ├── dashboard.js   # Protected dashboard page
│   ├── index.js       # Home/Login page
│── lib/
│   ├── mongodb.js     # MongoDB connection
│── models/
│   ├── User.js        # Mongoose User model
│── styles/            # Tailwind styles
│── Dockerfile         # Docker setup for Next.js
│── docker-compose.yml # Docker Compose config
│── .env.local         # Environment variables
│── package.json       # Dependencies
└── README.md          # Documentation
```

## **API Routes**  

| Endpoint              | Method | Description                          |
|-----------------------|--------|--------------------------------------|
| `/api/auth`          | POST   | NextAuth authentication             |
| `/api/user`          | GET    | Fetch user data                     |
| `/api/user`          | POST   | Create a new user                   |

## **Contributing**  
1. Fork the project  
2. Create a feature branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push to GitHub: `git push origin feature-name`  
5. Open a Pull Request 🚀  

## **License**  
📜 MIT License. Feel free to use and modify this project!  

🎉 **Happy Coding!** 🚀  
```
