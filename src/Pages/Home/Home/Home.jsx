import Navbar from "../../../Components/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;