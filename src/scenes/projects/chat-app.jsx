import { useEffect } from "react"
import { NavLink } from "react-router-dom"
// import { NavLink } from "react-router-dom";
import backIcon from "../../assets/back-outline.svg";


export const ChatApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="lg:w-3/6 xs:w-5/6 mx-auto mt-12 xs:mt-32  text-white">

                <div className="flex flex-row mx-auto mb-5 text-blue">
                    <img src={backIcon} alt="back to projects"></img>
                    <NavLink className="no-underline"  to="/projects">Back to Projects</NavLink>
                </div>

                <h1 className="mb-10 font-montserrat text-5xl font-bold  ">
                    ChatMate App
                </h1>

                <p className="mt-2 mb-5 text-md  text-xl md:text-start leading-8" >
                ChatMate is an app for mobile devices built using React Native. The app provides users with a chat interface and options to share images and their location.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

                    <div>
                        <h2 className="font-montserrat text-3xl font-bold">
                            Stack
                        </h2>
                        <div className="flex flex-col">
                            {['React Native', 'Expo','Gifted Chat', 'Firebase']
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
                            className="text-xl md:text-start leading-8  text-blue hover:underline"
                            href="https://chatmate-demo.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                         >
                            Live Demo
                        </a>
                        <a  
                            className="text-xl md:text-start leading-8 text-blue hover:underline"
                            href="https://github.com/minhajislam674/chat-app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <img
                    src={require("../../assets/chat-react-native-01.jpg")}
                    alt="meet-app"
                    className="h-auto pb-5"
                >
                </img>

                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Key Features
                </h2>


                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                    <ul className="list-disc pl-5 text-xl md:text-start leading-8">
                        <li >A page where users can enter their name and choose a background color for the chat screen
                        before joining the chat.</li>
                        <li>A page displaying the conversation, as well as an input field and submit button.</li>
                        <li>Users can send images and location data.</li>
                        <li>Data gets stored online and offline.</li>
                    </ul>
                </p>

                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Approach
                </h2>
                <h3 className="font-montserrat text-xl font-bold mt-5">
                    Development Setup & Chat UIs
                </h3>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                The first step was to set up Expo development environment to work with React Native. This involved installing the necessary dependencies and libraries. Then I built the chat screen and the chat functionality using the Gifted Chat library, which provides a pre-built chat UI and a set of functionalities. Accessibility considerations were applied to the chat screen to ensure that it is usable for users with disabilities.
                </p>
                <h3 className="font-montserrat text-xl font-bold mt-5">
                    User authentication and data storage
                </h3>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                    I applied Firebase anonymous authentication to allow users to access the chat functionality without having to create a specific account or login. Then I used Firebase’s Firestore database, which enabled easy storage and retrieval of chat conversations and also allowed real-time updates and synchronization of data between users.
                </p>
                <img
                    src={require("../../assets/chat-app-firestore-01.jpg")}
                    alt="meet-app"
                    className="h-auto pb-5"
                >
                </img>
                <h3 className="font-montserrat text-xl font-bold mt-5">
                    Storing Data on the Client-Side
                </h3>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                Offline functionality is one of the key features of the app, so configured React Native's asyncStorage API to store chats locally. Then I used the package NetInfo to check whether the user was online or offline. If the user was offline, the app would fetch and display data from asyncStorage.
                </p>
                <h3 className="font-montserrat text-xl font-bold mt-5">
                    Communication Features
                </h3>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                    I created a button in the input field that opens an Actionsheet with few actions: select an image from the library, open camera, and share location. I created a function that would first ask the user for permission to access their library. Then, the function would use expo-image-picker API to open the device's library and allow the user to select an image. Similarly, expo-location and expo-camera API were used for other actions.
                </p>

                <h2 className="font-montserrat text-3xl font-bold mt-5">
                    Further Work
                </h2>
                <p className="mt-2 mb-10 text-md text-xl md:text-start leading-8">
                The next step would be to implement the ability to send audio messages in addition to text and images. Additionally, I plan to upgrade from anonymous authentication to Phone or Email/Password authentication. 
                </p>

                <div className="flex flex-row mx-auto mb-10 text-blue">
                    <img src={backIcon} alt="back to projects"></img>
                    <NavLink className="no-underline"  to="/projects">Back to Projects</NavLink>
                </div>

        </div>
    )
}