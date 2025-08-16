# Full-Featured E-Commerce Frontend

A **full-featured e-commerce frontend** built with **Next.js 15**, demonstrating modern **state management**, **backend API handling**, **authentication**, and **RTK Query** for data fetching. This project is production-ready and can be deployed on **Vercel** or **Cloudflare Pages**.  

---

## Features

- **Next.js 15 (App Router)** for modern React routing  
- **React & Tailwind CSS** for responsive, modern UI  
- **State management** with **Redux Toolkit (RTK Query)** for API interactions  
- **Google & Facebook OAuth authentication** via **NextAuth.js**  
- Dynamic **product listing and details** pages  
- Cart and favorites management  
- SSR and SSG where applicable  
- Optimized for **Vercel** and **Cloudflare Pages** deployments  

---

## Table of Contents

- [Requirements](#requirements)  
- [Environment Variables](#environment-variables)  
- [Getting Started (Local)](#getting-started-local)  
- [Building for Production](#building-for-production)  
- [Deployment](#deployment)  
- [RTK Query Notes](#rtk-query-notes)  
- [License](#license)  

---

## Requirements

- Node.js >= 18.x  
- npm or yarn  
- Git  

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
DATABASE_URL=your_database_url   # Optional, if using a DB
```
#Getting Started (Local)

##Clone the repository:

git clone https://github.com/yourusername/your-project.git
cd your-project

##Install dependencies:

npm install
# or
yarn

#Run the development server:

npm run dev
# or
yarn dev
Open http://localhost:3000 to view the app.
The app reloads automatically on code changes.

#Building for Production

##Build the project:

npm run build
# or
yarn build

##Optionally, start the production server locally:

npm start
# or
yarn start

#Deployment
##Vercel

Push your project to GitHub.

Go to Vercel → New Project → Import Git Repository.

Set environment variables in the Vercel dashboard.

Deploy.

Your production URL will look like:

https://your-project.vercel.app

##Cloudflare Pages

Push your project to GitHub.

Go to Cloudflare Pages → Create a Project → Connect Git Repository.

Set build command:

npm run build
# or
yarn build


#RTK Query Notes

RTK Query is used for all API requests and state management.

Handles caching, fetching, and state updates automatically.

Make sure your apiSlice endpoints are configured with the correct backend API URLs.

Works seamlessly with authentication and protected routes.
