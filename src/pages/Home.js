import { useEffect, useState } from "react"

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

import LoadingVideo from "../assets/video/LoadingAnimationGenji_Final.mp4"

const Home = () => {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {
        !loaded && (
          <div className="video-loading">
            <video width="100%" height="100%" autoPlay muted onEnded={() => setLoaded(true)}>
              <source src={LoadingVideo} type="video/mp4" />
            </video>
          </div>
        )
      }
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
    </>
  );
}

export default Home;
