<div align="center">
  <h1>✨ Portfolio Website ✨</h1>
  <p>A modern, interactive, and beautifully designed personal portfolio website.</p>
</div>

---

## 🚀 Overview
This is a full-stack portfolio website built to showcase projects, skills, and experience. It features a sleek, animated frontend integrated with a robust backend architecture.

### ✨ Key Features
- **Dynamic Animations**: Smooth transitions and interactive elements powered by Framer Motion.
- **Custom Cursor**: A unique, tailored cursor experience (check out `CustomCursor.jsx`).
- **Responsive Design**: Flawless experience across desktop, tablet, and mobile devices.
- **Full-Stack Architecture**: Clean separation between the React frontend and Express backend.

---

## 💻 Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Utilities**: `dotenv` for environment variables, `cors` for cross-origin requests

---

## 📂 Project Structure

```text
📦 Portfolio
├── 📂 backend               # Express server and API logic
│   ├── package.json
│   └── server.js            # Entry point for backend
└── 📂 frontend              # React client application
    ├── 📂 src
    │   ├── 📂 components    # Reusable UI components (Layout, Footer, CustomCursor, etc.)
    │   ├── 📂 context       # React Context providers (CursorContext, etc.)
    │   └── ...
    ├── package.json
    └── vite.config.js       # Vite configuration
```

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and start the development server.
```bash
cd backend
npm install
npm run dev
```
*The backend will run using `nodemon` on the specified port (make sure to set up any necessary `.env` files).*

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, install dependencies, and start the Vite development server.
```bash
cd frontend
npm install
npm run dev
```
*The frontend will be available at `http://localhost:5173`.*

---

## 📜 Scripts

### Frontend (`/frontend`)
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Lints the codebase using `oxlint`.

### Backend (`/backend`)
- `npm start`: Starts the Express server.
- `npm run dev`: Starts the server with `nodemon` for hot-reloading during development.

---

<div align="center">
  <i>Designed and developed with passion. 💻☕</i>
</div>