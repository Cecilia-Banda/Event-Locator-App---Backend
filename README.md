# Event-Locator-App-Backend

## 📌 Overview
This is a **Node.js backend** for an event locator app, featuring:
- User authentication (JWT)
- Event management (CRUD)
- Location-based search (MongoDB Geospatial Queries)
- Notifications (Redis + BullMQ)
- Multilingual Support (i18n)
- Unit Testing (Jest + Supertest)

## 🚀 Installation
1. Clone the repo:
   ```sh
   git clone https://github.com/Cecilia-Banda/Event-Locator-App---Backend.git

// INSTRUCTIONS
npm install
npm run dev

// To Run tests:

npm test

📡 API Endpoints
Auth Routes
POST /api/auth/signup → Register a user

POST /api/auth/login → Login a user

Event Routes
POST /api/events → Create an event

GET /api/events → Get all events

GET /api/events/search?longitude=XX&latitude=YY&maxDistance=5000 → Search events by location

GET /api/events/filter?category=music → Filter events by category
