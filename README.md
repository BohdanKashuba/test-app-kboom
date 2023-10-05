# Test App KBOOM

This repository contains the source code for the Test App KBOOM project, a Next.js application. The project's goal is to showcase various Next.js and React.js skills, including creating a dynamic menu, fetching data from a mock API endpoint, and adhering to a provided design.

## Project Structure

The project's source code is organized into the following directory structure:

```
src/
|_ mock/
|_ assets/
|_ components/
|_ constants/
|_ layouts/
|_ pages/
| |_ [team]/
| | |_ api/
| | | |_ [team].ts
| | | |_ team.ts
| | |_ app.tsx
| | | global.css
| | |_ index.tsx
|_ sections/
|_ utils/
```

## Setup Instructions

To set up and run this project locally on your machine, follow these steps:

1. **Clone the Repository**: Start by cloning this GitHub repository to your local machine using the following command:

`git clone https://github.com/BohdanKashuba/test-app-kboom.git`


2. **Navigate to the Project Directory**: Move into the project directory:

`cd test-app-kboom`

3. **Install Dependencies**: Use npm to install project dependencies:

`npm install`

4. **Run the Development Server**: Start the development server to view the project locally:

`npm run dev`

5. **Access the Application**: Open your web browser and visit `http://localhost:3000` to access the running Next.js application.

## Design Decisions and Trade-offs

In this section, we'll provide an overview of the design decisions made during the development of this Next.js project, along with any trade-offs that were considered. Key points to highlight include:

- **Folder Structure**: The project's folder structure is organized to separate components, pages, styles, and other assets for improved maintainability.

- **Styling**: [Tailwind CSS](https://tailwindcss.com/) was chosen for styling components and pages to achieve a consistent and responsive design quickly.

- **State Management**: [React Context API](https://reactjs.org/docs/context.html) was used for managing application state for simplicity, but this choice may be re-evaluated as the project scales.

- **Routing**: [Next.js Routing](https://nextjs.org/docs/routing/introduction) is used for client-side routing, providing a smooth user experience.

- **Additional Dependencies**: Dependencies such as [axios](https://axios-http.com/) for API requests and [react-query](https://react-query.tanstack.com/) for managing data fetching and caching were included.

## Additional Libraries and Tools

Here are some of the key libraries and tools used in this project:

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [React Context API](https://reactjs.org/docs/context.html): For managing application state.
- [axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [react-query](https://react-query.tanstack.com/): A library for data fetching and caching.

For any questions or issues, please refer to the project's [GitHub Issues](https://github.com/BohdanKashuba/test-app-kboom/issues) section.

Good luck! We are looking forward to reviewing your submission.
