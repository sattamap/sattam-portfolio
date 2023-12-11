import Banner from "../../components/Banner";
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
        </div>
    );
};

export default Home;