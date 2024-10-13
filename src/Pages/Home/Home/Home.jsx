import Footer from "../../../Components/Footer/Footer";
import Blogs from "../../Blogs/Blogs/Blogs";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import WhyShouldHireMe from "../WhyShouldHireMe/WhyShouldHireMe";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WhyShouldHireMe></WhyShouldHireMe>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;