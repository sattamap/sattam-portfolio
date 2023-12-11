import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import Projects from "../../components/projects";
import Qualification from "../../components/qualification";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Qualification></Qualification>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;