# ZCRUM 🌟

A full-stack Jira clone built with **Next.js**, **React**, **Tailwind CSS**, **Prisma**, **Neon**, **Clerk**, and **Shadcn UI**. This project mimics Jira’s task management and authentication features with a modern, responsive UI.

## Features
- Task management (create, update, delete tasks)
- User authentication with Clerk
- Responsive design with Tailwind CSS and Shadcn UI
- Database management with Prisma and Neon

## Tech Stack
- **Next.js**: React framework for server-side rendering and static site generation
- **React**: UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **Prisma**: ORM for database management
- **Neon**: Serverless PostgreSQL database
- **Clerk**: Authentication and user management
- **Shadcn UI**: Reusable UI components

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/harshavardhan282/ZCRUM.git
   cd ZCRUM

2. **Install Dependencies**:
    ```bash
    npm install

3. **Set Up Environment Variables**:
Create a .env file in the project root and add the following:
    ```bash
    DATABASE_URL=your_neon_database_url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
4.  **Run the Application**:
    ```bash
      npm run dev

