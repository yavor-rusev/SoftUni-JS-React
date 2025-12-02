import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Team from "./components/Team";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            < Preloader />
            < Navigation /> 
            < Home /> 
            < Features /> 
            < About /> 
            < Team />
            < Courses />
            < Testimonials />
            < ContactUs />
            < Footer />   
        </>
    )
}

export default App
