# UniFolio Backend

Node.js + Express + MongoDB Atlas with role-based auth (Student | Faculty).

## Setup

1) Create a `.env` file in `UNIFOLIO_PROJECT/BACKEND/` with:

PORT=5000
MONGODB_URI=YOUR_MONGODB_ATLAS_URI
JWT_SECRET=your-strong-secret
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_FROM="UniFolio <no-reply@unifolio.app>"

2) Install and run

cd UNIFOLIO_PROJECT/BACKEND
npm install
npm run dev

## API

- POST `/api/auth/signup` { email, password, role }
- POST `/api/auth/verify-otp` { email, role, otp, password }
- POST `/api/auth/login` { email, password, role }
- GET `/api/auth/student/protected` (Student only)
- GET `/api/auth/faculty/protected` (Faculty only)

Send JWT in `Authorization: Bearer <token>`.
