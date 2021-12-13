import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroCountdown,
  HeroH1,
  CountdownWrapper,
  HeroJap,
  HeroDate,
  HeroP,
  HeroJapImg
} from './HeroElements'

import { useState, useEffect, useRef } from "react";
import Genji from '../../assets/genji.jpg'
import Countdown from 'react-countdown'
import JapHero from '../../assets/metaverse.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const HeroSection = () => {

  const calculateTimeLeft = () => {
    const difference = +new Date(`12/30/2021`) - +new Date();
    let timeLeft = {};

    if (difference >= 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    console.log(timeLeft);
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());
  useEffect(() => { Aos.init({ duration: 2000 }); }, []);
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {


    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg alt="Background image" src={Genji}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroJap data-aos="fade-up">
          <HeroJapImg src={JapHero} />
        </HeroJap>
        <HeroDate data-aos="fade-up">
          <HeroP>NOV</HeroP>
          <HeroP>30TH</HeroP>
          <HeroP>8PM</HeroP>
          <HeroP>SGT</HeroP>
        </HeroDate>
        <HeroCountdown>
          <HeroH1>Countdown Mint Day:</HeroH1>
          <CountdownWrapper>
            {/* 
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                    */}
            <span>TBD</span>
          </CountdownWrapper>

        </HeroCountdown>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;