# Code Interns

Code Interns is a job board designed for connecting interns with potential employers. It allows for CRUD (CREATE, READ, UPDATE, DELETE) operations and serves as my capstone project.

<div>
    <h2>Table of Contents</h2>
    <ol>
        <li><a href="#visuals" style="text-decoration: none;">Visuals</a></li>
        <li><a href="#features-availability" style="text-decoration: none;">Features</a></li>
        <li><a href="#stack" style="text-decoration: none;">Stack</a></li>
        <li><a href="#usage" style="text-decoration: none;">Usage</a></li>
        <li><a href="#license" style="text-decoration: none;">License</a></li>
    </ol>
</div>

## Visuals
#### Candidates
<div style="margin-bottom: 20px;">
    <img src="/public/readme/screenshot-desktop-candidates.jpg" alt="Candidates feed desktop" width="80%" height="50%" style="border: 2px solid #000; border-radius: 10px;" />
</div>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
    <div>
        <h4>Candidates mobile</h4>
        <img src="/public/readme/screenshot-mobile-candidates.jpg" alt="Candidates feed mobile" width="25%" style="border: 2px solid #000; border-radius: 10px;" />
    </div>
    <div>
        <h4>Filters mobile</h4>
        <img src="/public/readme/screenshot-mobile-candidates-filters.jpg" alt="Candidates feed filters" width="25%" style="border: 2px solid #000; border-radius: 10px;" />
    </div>
</div>



## Features Availability


|          | Feature                       | Status         |
|--------------------------|-------------------------------|----------------|
| **Landing Page**             |                              | ![Available](https://img.shields.io/badge/-Available-green)      |
| **Authorization**            |                              | ![In Progress](https://img.shields.io/badge/-In%20Progress-blue)              |
| Sign Up                  | - Via Google                  | ![Planned](https://img.shields.io/badge/-Planned-yellow)        |
|                          | - Via LinkedIn                | ![Planned](https://img.shields.io/badge/-Planned-yellow)        |
|                          | - Via Email                   | ![Planned](https://img.shields.io/badge/-Planned-yellow)        |
| Sign In                  | - Via Google                  | ![Planned](https://img.shields.io/badge/-Planned-yellow)        |
|                          | - Via GitHub                  | ![Planned](https://img.shields.io/badge/-Planned-yellow)        |
|                          | - Via LinkedIn                | ![Planned](https://img.shields.io/badge/-Planned-yellow)        |
| **HR Dashboard**             | Browse Candidates Feed        | ![Available](https://img.shields.io/badge/-Available-green)      |
|                          | Search by Keywords            | ![Available](https://img.shields.io/badge/-Available-green)      |
|                          | Filter Candidates             | ![Available](https://img.shields.io/badge/-Available-green)      |
|                          | Browse a Candidate            | ![In Progress](https://img.shields.io/badge/-In%20Progress-blue)    |
|                          | Save a Candidate              | ![In Progress](https://img.shields.io/badge/-In%20Progress-blue)    |
|                          | Publish a Job                 | ![In Progress](https://img.shields.io/badge/-In%20Progress-blue)    |
|                          | Inbox                         | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
|                          | Guides                        | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
|                          | Edit Profile                  | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
| **Candidate Dashboard**      | Jobs Feed                     | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
|                          | Inbox                         | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
|                          | Salaries                      | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
|                          | Edit Profile                  | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |
|                          | Upload CV                     | ![Later](https://img.shields.io/badge/-Later-lightgrey)          |


## Stack

**Front-end:** React, Pure CSS (no Bootstrap or Tailwind), Next.js <br>
**Back-end:** Node.js, Firebase <br>
**Deployment:** Vercel <br>

## Usage

### Pre-requisites

- Node.js v20.9 or later
- Next.js v14.0.3 or later

### Build and Run Locally

1. **Clone the repository** to your local machine.
2. **Navigate to the project directory.**
3. **Install dependencies** by running `npm install`.
4. **Start the development server** by running `npm run dev`. You can also use `yarn dev` or `pnpm dev`.
5. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

### Configure Authentication and Database

#### Google Cloud Setup

1. Generate a Client ID and Client Secret.
2. Add Authorized JavaScript origins:
   - `http://localhost:3000`
   - `yourapp.vercel.app` (if using Vercel)
3. Add Authorized redirect URIs:
   - `http://localhost:3000`
   - `http://localhost:3000/api/auth/callback/google`
   - If using Vercel:
     - `yourapp.vercel.app`
     - `yourapp.vercel.app/api/auth/callback/google`

#### Configure Local Environment Variables

1. Open `.env`.
2. Set the following variables:
   - `GOOGLE_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_URL` to `http://localhost:3000`
   - `NEXTAUTH_SECRET` (Generate using `openssl rand -base64 32`)

### Deployment

- The easiest way to deploy this Next.js application is by using the Vercel Platform, created by the makers of Next.js
- For detailed instructions, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- If using Vercel, change the `NEXTAUTH_URL` to `yourapp.vercel.app` in the "Environment Variables" tab in the project settings on the Vercel dashboard

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT)
