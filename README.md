# Next.js Authentication and Room Management

This project is a Next.js application that provides user authentication, sign-up, sign-in, and room management features. Users can sign up, sign in, and access a dashboard where they can view and join various rooms. Each room displays its description and members. The application is built using Next.js, TailwindCSS, SQLite, and Firebase authentication.

## Features

- User sign-up with email and password
- User sign-in with email and password
- Dashboard displaying a list of rooms
- Room details page displaying room description and members
- Ability to join a room

## Future Improvements

- Implement notification system for moderators when a user requests to join a room

## Installation

1. Clone the repository:

## Configuration

1. Create a Firebase project and set up Firebase Authentication.
2. Obtain your Firebase configuration object.
3. Create a `.env.local` file in the root directory of your project.
4. Add your Firebase configuration variables to the `.env.local` file: I HAVE ATTACHED A ENV.TXT FILE WITH THE VARIABLES

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
