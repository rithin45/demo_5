# Astra Nova Event Platform

Astra Nova is a premium MERN event website built as a monorepo with a cinematic React frontend and an Express + MongoDB backend. The experience includes animated page transitions, GSAP-enhanced hero motion, glassmorphism sections, responsive layouts, and working APIs for contact, newsletter, and ticket registration.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, GSAP, Lucide React, React Router DOM, Axios
- Backend: Node.js, Express.js, MongoDB, Mongoose, CORS, dotenv
- Workspace: npm workspaces with root `npm install` and root `npm run dev`

## Folder Structure

```text
Event/
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   ├── contactController.js
│       │   ├── newsletterController.js
│       │   └── ticketController.js
│       ├── middleware/
│       │   ├── errorHandler.js
│       │   └── notFound.js
│       ├── models/
│       │   ├── ContactSubmission.js
│       │   ├── NewsletterSubscriber.js
│       │   └── TicketRegistration.js
│       └── routes/
│           ├── contactRoutes.js
│           ├── newsletterRoutes.js
│           └── ticketRoutes.js
├── frontend/
│   ├── .env
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── animations/
│       │   └── variants.js
│       ├── assets/
│       │   └── .gitkeep
│       ├── components/
│       │   ├── home/
│       │   │   ├── ContactSection.jsx
│       │   │   ├── CountdownSection.jsx
│       │   │   ├── FaqSection.jsx
│       │   │   ├── HeroSection.jsx
│       │   │   ├── HighlightsSection.jsx
│       │   │   ├── NewsletterSection.jsx
│       │   │   ├── SponsorsSection.jsx
│       │   │   ├── StatsSection.jsx
│       │   │   └── TestimonialsSection.jsx
│       │   └── shared/
│       │       ├── AmbientBackdrop.jsx
│       │       ├── CustomCursor.jsx
│       │       ├── Footer.jsx
│       │       ├── GlowButton.jsx
│       │       ├── LoadingScreen.jsx
│       │       ├── Navbar.jsx
│       │       ├── PageTransition.jsx
│       │       ├── SectionHeading.jsx
│       │       └── TicketRegistrationModal.jsx
│       ├── data/
│       │   └── siteContent.js
│       ├── hooks/
│       │   ├── useCountdown.js
│       │   ├── useMagnetic.js
│       │   └── useParallax.js
│       ├── layouts/
│       │   └── SiteLayout.jsx
│       ├── pages/
│       │   ├── AboutPage.jsx
│       │   ├── HomePage.jsx
│       │   ├── NotFoundPage.jsx
│       │   └── PricingPage.jsx
│       └── utils/
│           └── api.js
├── .gitignore
├── package.json
└── README.md
```

## Frontend Features

- Premium dark UI with glassmorphism cards and floating gradients
- Animated loading screen and smooth route/page transitions
- GSAP hero reveal animations and subtle parallax motion
- Framer Motion scroll reveals, hover states, and accordion/toggle interactions
- Reusable CTA buttons, section headers, modal flow, and content sections
- Responsive navigation, home page sections, about page storytelling, and pricing cards

## Backend Features

- Express server with MVC structure
- MongoDB connection via Mongoose
- REST endpoints for:
  - `POST /api/contact`
  - `POST /api/newsletter`
  - `POST /api/tickets`
  - `GET /api/health`
- Environment-based configuration and centralized error handling

## Installation

### 1. Install dependencies from the project root

```bash
npm install
```

### 2. Make sure MongoDB is running locally

Default local connection:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/astra-nova
```

### 3. Start the full stack from the root

```bash
npm run dev
```

This starts:

- Vite frontend on `http://localhost:5173`
- Express backend on `http://localhost:5000`

## Environment Variables

### Backend: `backend/.env`

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/astra-nova
CLIENT_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### Frontend: `frontend/.env`

```env
VITE_API_BASE_URL=/api
```

## Useful Commands

```bash
# install everything from root
npm install

# run frontend + backend together
npm run dev

# build the frontend and verify backend workspace scripts
npm run build

# run only the backend
npm run start
```

## API Payload Examples

### Contact submission

```json
{
  "name": "Ava Rao",
  "email": "ava@northstar.ai",
  "company": "Northstar AI",
  "message": "We would like to discuss a partnership lounge."
}
```

### Newsletter subscription

```json
{
  "email": "ava@northstar.ai",
  "source": "homepage-newsletter"
}
```

### Ticket registration

```json
{
  "fullName": "Ava Rao",
  "email": "ava@northstar.ai",
  "company": "Northstar AI",
  "passType": "Pro Pass",
  "billingCycle": "yearly",
  "teamSize": 4,
  "notes": "Looking for team seating together."
}
```

## PowerShell Setup Notes

If `npm` is blocked by PowerShell execution policy, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Production Notes

- The frontend already proxies `/api` requests to `http://localhost:5000` in development.
- Update `CLIENT_ORIGIN` and `VITE_API_BASE_URL` for deployment environments.
- The UI is content-driven through `frontend/src/data/siteContent.js` for easier customization.
