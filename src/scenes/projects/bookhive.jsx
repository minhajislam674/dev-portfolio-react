import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import backIcon from "../../assets/back-outline.svg";

export const BookHive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lg:w-3/6 xs:w-5/6 mx-auto mt-12 xs:mt-32  text-white">
      <div className="flex flex-row mx-auto mb-5 text-blue">
        <img src={backIcon} alt="back to projects"></img>
        <NavLink className="no-underline" to="/projects">
          Back to Projects
        </NavLink>
      </div>

      <h1 className="mb-10 font-montserrat text-5xl font-bold  ">BookHive</h1>

      <p className="mt-2 mb-5 text-md  text-xl md:text-start leading-8">
        BookHive is a platform that offers bookworms to browse and manage their
        reading list.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        <div>
          <h2 className="font-montserrat text-3xl font-bold">Stack</h2>
          <div className="flex flex-col">
            {[
              "Angular",
              "Material UI",
              "PostgreSQL",
              "Prisma",
              "Node.js",
              "Express",
            ].map((item) => (
              <p className="mt-2 text-xl md:text-start">{item}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-montserrat text-3xl font-bold mb-2">Links</h2>
          <a
            className="text-xl md:text-start leading-8  text-blue hover:underline"
            href="https://bookhive.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            className="text-xl md:text-start leading-8 text-blue hover:underline"
            href="https://github.com/minhajislam674/bookhive-app-angular"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Link
          </a>
        </div>
      </div>
      <img
        src={require("../../assets/bookhive-demo.jpeg")}
        alt="meet-app"
        className="h-auto pb-5"
      ></img>

      <h2 className="font-montserrat text-3xl font-bold mt-5">
        Purpose & Objective
      </h2>

      <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
        The purpose of the BookHive project was to develop a minimal single-page
        application (SPA) that allowed users to browse and manage their reading
        list. The app was built on top of server-side code and incorporated a
        REST API and a PostgreSQL database. The primary objective was to learn
        Angular, TypeScript, and related technologies by building a real-world
        application.
      </p>

      <h2 className="font-montserrat text-3xl font-bold mt-5">Approach</h2>
      <h3 className="font-montserrat text-xl font-bold mt-5">Client-Side</h3>
      <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
        To build the frontend of the BookHive application, I used Angular, a
        popular JavaScript framework, and TypeScript, a superset of JavaScript
        that adds strong typing and other features to the language.
        Angular-Material was used to provide a consistent UI experience and a
        modern, responsive design. I created several components to implement the
        various views required for the application, including welcome page
        consists of login and sign-up modals, a profile view that shows the
        user's bookshelf, and a view to browse all available books.
      </p>

      <h3 className="font-montserrat text-xl font-bold mt-5">Server-Side</h3>
      <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
        The backend of the BookHive application was built using Node and
        Express, a popular web framework for Node. To interact with the
        database, I used Prisma, which provides a query builder, and schema
        migration. This enabled me to focus more on building the business logic
        of the application, rather than writing complex SQL queries. To ensure
        that the user data is secure, I implemented authentication and
        authorization using Passport.js and JWT. Additionally, I used bcrypt to
        hash user passwords before storing them in the database. The CORS
        package was used to allow Cross-Origin Resource Sharing between the
        frontend and backend, enabling the application to run smoothly.
      </p>

      <h2 className="font-montserrat text-3xl font-bold mt-5">
        Learning Outcomes
      </h2>
      <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
        Through building the BookHive application with Angular, I gained a
        strong understanding of Angular services, dependency injection, routing,
        and most importantly, I learned TypeScript. This project was a great
        opportunity for me to compare and contrast Angular with React in terms
        of the mental model and architecture, which gave me a broader
        perspective on different front-end technologies. It was also so much fun
        to work with a PostgreSQL database and the Prisma ORM, which provided a
        simpler and more intuitive way to interact with the database.
      </p>

      <div className="flex flex-row mx-auto mb-10 text-blue">
        <img src={backIcon} alt="back to projects"></img>
        <NavLink className="no-underline" to="/projects">
          Back to Projects
        </NavLink>
      </div>
    </div>
  );
};
