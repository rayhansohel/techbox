# TechBox

TechBox is a simple blog viewer application built with Next.js. This project demonstrates routing, server and client components, dynamic routes, authentication, and data fetching.

## Features

- **Home Page (Static Route):**

  - Displays a list of blog post titles fetched from a mock API.
  - Each title links to a detailed page for that post.

- **Blog Details Page (Dynamic Route):**

  - Uses a dynamic route `/blog/[id]` to display details of a specific blog post.
  - Fetches blog details based on the ID from the URL.

- **Protected Profile Page (Static Route):**

  - Displays a static message: "Welcome to your profile!"
  - Uses Kinde Auth to protect the page.
  - Redirects unauthenticated users to the login page.

- **Navigation:**
  - Includes a header with links to "Home" and "Profile" pages.
  - Displays a "Login" button if the user is not authenticated and a "Logout" button if they are.

## Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Authentication:** Kinde Auth
- **Data Fetching:** JSONPlaceholder API

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/techbox.git
   cd techbox
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env.local` file and add the required Kinde Auth credentials:

   ```env
   KINDE_ISSUER_URL=your_kinde_issuer_url
   KINDE_CLIENT_ID=your_kinde_client_id
   KINDE_CLIENT_SECRET=your_kinde_client_secret
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Open [https://techbox-blog.vercel.app/](techbox-blog.vercel.app) in your browser.

## Mock API

- Fetch all posts:

  ```
  GET https://jsonplaceholder.typicode.com/posts
  ```

- Fetch a specific post by ID:
  ```
  GET https://jsonplaceholder.typicode.com/posts/{id}
  ```

Enjoy exploring TechBox!
