# Project Setup Guide

## Installing the Project

1. **Install Node.js**
   - Ensure you have **Node.js version >= 20.** installed.
   - Download: [https://nodejs.org/](https://nodejs.org/)
   - Check your version:
   ```bash
   node -v
   ```

2. **Clone the repository**
   ```bash
   git clone https://github.com/simonfarkas/zadanie-gb.git
   cd zadanie-gb
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Building for Production
To create an optimized production build:
bashnpm run build
# or
yarn build
To test the production build locally:
bashnpm run start
# or
yarn start

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication

The application uses the Fake Store API for authentication.

**Test Credentials:**
- Username: `johnd`
- Password: `m38rmF$`

## Features

- User authentication (login/logout)
- Protected product browsing
- Product listing
- Detailed product view
- Responsive design for mobile and desktop

## Technologies

- Next.js 15
- Tailwind CSS
- Fake Store API
