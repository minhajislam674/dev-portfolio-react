import { useEffect } from "react"
import { NavLink } from "react-router-dom"


export const MeetApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="lg:w-3/6 xs:w-5/6 mx-auto mt-12 xs:mt-32  text-white">

                <div className="flex flex-row gap-9 mx-auto mb-5">
                    <NavLink className="no-underline"  to="/projects">Back to Projects</NavLink>
                </div>

                <h1 className="mb-10 font-montserrat text-5xl font-bold  ">
                    Meet App
                </h1>

                <p className="mt-2 mb-5 text-md  text-xl md:text-start leading-8" >
                    Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD). The app uses the Google Calendar API to fetch upcoming events. It provides users access to different tech events and workshops around the world.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div>
                        <h2 className="font-montserrat text-3xl font-bold">
                            Type
                        </h2>
                        <p className="mt-2 text-xl md:text-start" >
                            Social App
                        </p>
                    </div>
                    <div>
                        <h2 className="font-montserrat text-3xl font-bold">
                            Stack
                        </h2>
                        <div className="flex flex-col">
                            {['React', 'AWS Lambda','Jest', 'Enzyme', 'Pupeeteer']
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
                            href="https://minhajislam674.github.io/meet/"
                            target="_blank"
                            rel="noreferrer"
                         >
                            Live Demo
                        </a>
                        <a  
                            className="text-xl md:text-start leading-8 text-blue-light hover:underline"
                            href="https://github.com/minhajislam674/meet"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <img
                    src={require("../../assets/meet-app-01.jpg")}
                    alt="meet-app"
                    className="h-auto pb-5"
                >

                
                </img>



                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Purpose & Objective
                </h2>


                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                Meet App was a project I built as part of my full stack web development program at CareerFoundry to 
                demonstrate my mastery of test-driven development (TDD) and behavior-driven development (BDD).
                The goal of the project was to develop a progressive web app that can work offline and
                has a serverless backend using a TDD approach.

                </p>




                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Approach
                </h2>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                I used AWS Lambda and the Serverless Toolkit to set up an authorization server
                 that allows users of the app to connect to the Google Calendar API via an access token.

                 Based on the defined scenarios, I created unit and integration tests for the features and tested how the components of the app worked individually and as a whole. 
                 I then ran end-to-end tests using the Pupeeteer tool and reviewed the user flow throughout the app.

                 I implemented Web App Manifest and Service Worker to turn the app into a PWA, and used Lighthouse to evaluate its performance and qualifications.
                  Finally, I used Recharts, a React-based visualization library, to add a pie chart and scatter plot to the app.
                </p>



                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Challenges And Learnings
                </h2>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                One of the biggest challenges I faced on this project was writing tests before implementing the code, as TDD was an approach 
                I wasn't familiar with. So I had to spend a lot of time learning new tools, from Jest and Enzyme for unit and integration testing, 
                to Puppeteer for end-to-end testing, to Cucumber for user acceptance testing. There is one thing I would do differently if I could, 
                and that is to use the React testing library instead of Enzyme. 
                This is because Enzyme is no longer actively supported in React-based applications.
                </p>

                <div className="flex flex-row gap-9 mx-auto mb-10">
                    <NavLink className="no-underline"  to="/projects">Back to Projects</NavLink>
                </div>


            
        </div>
    )
}