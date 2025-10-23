# GEMINI.md

## Project Overview

This is a corporate website for a company named "Shangtel". It is a single-page application (SPA) built with Vue.js 3. The project uses Vite for the build tooling, Vue Router for navigation, and Tailwind CSS for styling. Font Awesome is used for icons.

The application has three main pages:
*   **Homepage:** The main landing page.
*   **Portfolio:** Likely showcases the company's projects or products.
*   **Carrier:** Could be related to career opportunities or services for carriers.

## Building and Running

The project is managed with npm.

1.  **Install Dependencies:**
    ```sh
    npm install
    ```

2.  **Run Development Server:**
    This command starts a hot-reloading development server.
    ```sh
    npm run dev
    ```

3.  **Build for Production:**
    This command compiles and minifies the application for production. The output is placed in the `dist` directory.
    ```sh
    npm run build
    ```

4.  **Preview Production Build:**
    This command starts a local server to preview the production build from the `dist` directory.
    ```sh
    npm run preview
    ```

## Development Conventions

*   **Path Aliases:** The project uses the `@` alias for the `src` directory, which is configured in `vite.config.js`.
*   **Styling:** Styling is done using Tailwind CSS. The configuration is in `tailwind.config.js`. Global styles can be found in `src/assets/main.css`.
*   **Routing:** Routes are defined in `src/router/index.js`. New pages should be added to this file.
*   **Components:** Reusable UI components are located in the `src/components` directory.
*   **Pages:** The top-level components for each route (page) are located in the `src/pages` directory.
*   **Entry Point:** The main application entry point is `src/main.js`, where the Vue app is created and plugins like Vue Router are registered.
