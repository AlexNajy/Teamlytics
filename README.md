# Teamlytics

  > The CEO you never had.

  Teamlytics is a full-stack workspace management tool for tracking tasks and team members. It features an AI assistant interface (in progress), task assignment, and team member
  management.

  ---

  ## Tech Stack

  | Layer | Technologies |
  |---|---|
  | Frontend | React 19, TypeScript, Vite, Tailwind CSS, TanStack Query, Radix UI |
  | Backend | Python, FastAPI, SQLAlchemy, Alembic, Pydantic |
  | Database | PostgreSQL (Docker) |

  ---

  ## Getting Started

  ### Prerequisites

  - Node.js + npm
  - Python 3.10+
  - Docker

  ---
  
  ### 1. Database

  ```bash
  cd db
  docker compose up -d

  The PostgreSQL instance will be available on localhost:3000.

  Run migrations from the backend directory:

  cd backend
  alembic upgrade head

  ---
  2. Backend

  cd backend
  python -m venv venv
  source venv/bin/activate      # Windows: venv\Scripts\activate
  pip install -r requirements.txt
  fastapi dev main.py

  Backend runs at http://localhost:8000. Create a .env file with:
  
  FRONTEND_PORT=5173

  ---
  3. Frontend

  cd teamlytics
  npm install
  npm run dev

  Frontend runs at http://localhost:5173. Create a .env.local file with:

  VITE_BACKEND_URL=http://localhost:8080/api/v1

  ---
  Features
  
  - Tasks — Create, assign, and track tasks with status (Open, In Progress, Blocked, Completed), estimated time, and due dates.
  - Team — Manage team members, view their current task, and queue upcoming work.
  - Schedule — Coming soon.
  - AI Assistant — Coming soon.

  ---
  API

  The REST API is served at /api/v1. Key endpoints:

  ┌────────┬────────────────────┬────────────────┐
  │ Method │      Endpoint      │  Description   │
  ├────────┼────────────────────┼────────────────┤
  │ GET    │ /api/v1/tasks      │ List all tasks │
  ├────────┼────────────────────┼────────────────┤
  │ POST   │ /api/v1/tasks      │ Create a task  │
  ├────────┼────────────────────┼────────────────┤
  │ DELETE │ /api/v1/tasks/{id} │ Delete a task  │
  ├────────┼────────────────────┼────────────────┤
  │ GET    │ /api/v1/users      │ List all users │
  ├────────┼────────────────────┼────────────────┤
  │ POST   │ /api/v1/users      │ Create a user  │
  ├────────┼────────────────────┼────────────────┤
  │ DELETE │ /api/v1/users/{id} │ Delete a user  │
  ├────────┼────────────────────┼────────────────┤
  │ GET    │ /health            │ Health check   │
  └────────┴────────────────────┴────────────────┘
  
  ---
  Project Structure

  TeamlyticsMono/
  ├── backend/          # FastAPI app, models, repositories, API routes
  ├── teamlytics/       # React frontend (Vite + TypeScript)
  └── db/               # Docker Compose + Alembic migrations
