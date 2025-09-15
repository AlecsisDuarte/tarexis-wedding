# T & A Wedding Website

This is the official wedding website for T & A, built with React, Vite, and TypeScript. It provides guests with all the necessary information about the wedding events, travel, and more.

## ✨ Features

-   **Responsive Design**: A mobile-first approach ensures a great user experience on all devices, from desktops to smartphones, featuring a collapsible burger menu.
-   **Bilingual Support**: Full internationalization (i18n) for English and Spanish, allowing guests to switch languages seamlessly.
-   **Modern Tech Stack**: Built with modern web technologies for a fast and reliable experience.
-   **Component-Based Architecture**: Clean and maintainable code using reusable React components.
-   **Client-Side Routing**: Fast page transitions handled by React Router.

## 🛠️ Tech Stack

-   **Framework/Library:** [React](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** CSS

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (version 18.x or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/tarexis-wedding-v2.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd tarexis-wedding-v2
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open http://localhost:5173 to view it in your browser. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 📁 Project Structure

```
src
├── assets/         # Static files like images and fonts
├── components/     # Reusable React components (e.g., Navbar)
├── pages/          # Page components corresponding to routes
├── App.tsx         # Main application component with routing
├── LanguageContext.tsx # Context for managing language state
└── main.tsx        # Main entry point of the application
```