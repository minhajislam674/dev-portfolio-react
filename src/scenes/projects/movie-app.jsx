import { motion } from "framer-motion"
import { useEffect } from "react"


export const MovieApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="lg:w-3/6 xs:w-5/6 mx-auto mt-12 xs:mt-32  text-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h1 className="mb-10 font-montserrat text-5xl font-bold  ">
                    OscarFlicks
                </h1>

                <p className="mt-2 mb-5 text-md  text-xl md:text-start leading-8" >
                With OscarFlicks, users can easily search and filter through a wide range of Oscar-winning films, view detailed information about each film, and even sign up to be able to add films to their list of favorites.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div>
                        <h2 className="font-montserrat text-3xl font-bold">
                            Type
                        </h2>
                        <p className="mt-2 text-xl md:text-start" >
                            Film Database
                        </p>
                    </div>
                    <div>
                        <h2 className="font-montserrat text-3xl font-bold">
                            Stack
                        </h2>
                        <div className="flex flex-col">
                            {['React', 'Node.js','Express', 'MongoDB']
                            .map((item) => (
                            <p className="mt-2 text-xl md:text-start">{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-montserrat text-3xl font-bold mb-2">
                            Links
                        </h2>
                        <a 
                            className="text-xl md:text-start leading-8  text-blue-light hover:underline"
                            href="https://oscar-flicks.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                         >
                            Live Demo
                        </a>
                        <a  
                            className="text-xl md:text-start leading-8 text-blue-light hover:underline"
                            href="https://myflix-movies.onrender.com/documentation/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            API Endpoints
                        </a>
                        <a  
                            className="text-xl md:text-start leading-8 text-blue-light hover:underline"
                            href="https://github.com/minhajislam674/myflix-react"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <img
                    src={require("../../assets/movie-app-01.jpg")}
                    alt="meet-app"
                    className="h-auto pb-5"
                >
                </img>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Purpose & Objective
                </h2>

                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                The goal of the project was to develop the complete server-side and client-side for the application from scratch. The app was intended to present information about Oscar-winning movies in a simple way. The idea was to give movie enthusiasts the ability to add movies to their favorite list and have access to the movies they want to see or recommend to their peers. This meant I had to add user profiles, authentication, and a more robust database.

                </p>

            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Approach
                </h2>
                <h3 className="font-montserrat text-xl font-bold mt-5">
                    Server-Side
                </h3>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                To build the RESTful API,  I used Node.js and Express, that interacts with a non-relational database (MongoDB). I used Mongoose to model the business logic, 
                which helped to define the schema of the data and perform CRUD operations to retrieve 
                or store movie data. To handle user authentication and authorization, I implemented 
                JSON Web Tokens (JWT) and included data validation logic to ensure that the data entered 
                by the user is accurate and secure. Finally, I used Postman to test the 
                <a className="text-xl md:text-start leading-8 text-blue-light hover:underline"
                            href="https://github.com/minhajislam674/myflix-react"
                            target="_blank"
                            rel="noreferrer"> API endpoints
                </a>, 
                documented the API responses using Swagger and OpenAPI 3 specification.
                </p>
                <img
                    src={require("../../assets/movie-app-server-01.jpg")}
                    alt="meet-app"
                    className="h-auto pb-5"
                >
                </img>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h3 className="font-montserrat text-xl font-bold mt-5">
                    Client-Side
                </h3>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                    To build the client-side of the application, I used React as the main JavaScript library. The project needed dependencies like React-Router and React-Router-DOM to implement the routing functionality, and axios to fetch data from the server side. I created several interface views, including a main view that shows a list of all movies, a single movie view that shows data about a single movie, a login view, a registration view and a profile view where users can update their user data and list of favorites. Finally, I leveraged React-Bootstrap to make thee app responsive and to provide a consistent look and feel.
                </p>
                <img
                    src={require("../../assets/movie-app-client-01.jpg")}
                    alt="meet-app"
                    className="h-auto pb-5"
                >
                </img>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Challenges And Learnings
                </h2>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                    The application required several different views, and implementing routing to handle these different views and provide a seamless navigation experience for the users was a significant challenge. Besides, in development mode, when I ran the application on my local machine, the JavaScript code was able to manipulate the current URL and redirect the user to a different page. However, in production, when the application is deployed on a static host like Netlify, the routing is handled by the server. So, I faced several issues like handling the 404 error pages after deployment, but with the help of my mentor and tutor, and by carefully handling the routes and navigation, I was able to tackle the problems.
                </p>
            </motion.div>

            
        </div>
    )
}