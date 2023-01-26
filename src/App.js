import { Home } from "./scenes/home";
import { Contact } from "./scenes/contact";
import { About } from "./scenes/about";
import { Projects } from "./scenes/projects";
import { Footer } from "./scenes/footer";
import { MovieApp } from "./scenes/projects/movie-app";
import { MeetApp } from "./scenes/projects/meet-app";
import { ChatApp } from "./scenes/projects/chat-app";
import Navbar from "./scenes/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/oscar-flicks" element={<MovieApp/>} />
        <Route path="/projects/meet-app" element={<MeetApp/>} />
        <Route path="/projects/chat-app" element={<ChatApp/>} />
      </Routes>
      <Footer/>

    
    </BrowserRouter>

  );
}

export default App;
