import Footer from '../components/Footer';
import useGetAllJob from '../Hooks/UseGetAllJobs';
import CategoryCrousel from "./CategoryCrousel";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Navbar from "./shared/Navbar";

const Home = () => {
    useGetAllJob()
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <CategoryCrousel />
                <LatestJobs />
                <Footer />
            </div>
        </>
    )
}

export default Home;