# Mock E-Com Cart

A full-stack shopping cart app for Vibe Commerce internship screening.

## Features
- **Backend**: REST APIs for products, cart management, and checkout. Uses SQLite for persistence.
- **Frontend**: React app with products grid, cart view, and checkout modal. Responsive design.
- **Bonus**: DB persistence, error handling, Fake Store API integration (toggle in `server.js`).

## Tech Stack
- Frontend: React
- Backend: Node.js/Express
- DB: SQLite
- APIs: RESTful

## Setup
1. Clone the repo: `git clone <your-github-repo-url>`
2. Backend:
   - `cd backend`
   - `npm install`
   - `npm start` (runs on http://localhost:5000)
3. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm start` (runs on http://localhost:3000)
4. Open http://localhost:3000 in your browser.

## Screenshots
- [Products Page](screenshots/products.png)
- [Cart View](screenshots/cart.png)
- [Checkout Modal](screenshots/checkout.png)

## Explanation
- Products are fetched from the backend (local DB or Fake Store API).
- Cart persists in SQLite; items can be added/removed.
- Checkout generates a mock receipt and clears the cart.

## Demo Video
[1-2 min Demo Video](https://loom.com/your-unlisted-link)  // Replace with your Loom/YouTube link

## Submission
GitHub Repo: [Your Repo Link]