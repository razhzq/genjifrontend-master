
import CollectionInfo from "../components/CollectionInfo";
import DiscordJoin from "../components/DiscordJoin";
import FAQ from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Intro from "../components/Intro";
import RoadMapJap from "../components/RoadMapJap";
import SliderSection from "../components/Slider";
import Team from "../components/Team";
import RoadmapPhase from "../components/Phase";
import ImageTitle from "../components/ImageTitle";


const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Intro />
      <SliderSection />
      <RoadMapJap />
      <RoadmapPhase />
      <ImageTitle />
      <Team />
      <FAQ />
      <DiscordJoin />
      <Footer />
    </div>
  );
}

export default Home;
