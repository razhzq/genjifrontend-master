

import {
	RoadmapContainer,
	RoadmapWrapper,
	CharImg1,
	CharImg2,
	Content,
	ContentH1,
	ContentP,
	RoadmapBtnWrapper,
	Img
} from './RoadmapElements.js'
import { Button } from './Button'
import Char1 from '../../assets/roadmapchar.png'
import Char2 from '../../assets/roadmapchar2.png'
import { animateScroll as scroll } from 'react-scroll'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";


const RoadMapJap = () => {

	const toggleHome = () => {
		scroll.scrollToTop();
	}
    useEffect(()=>{Aos.init({duration: 2000});}, []);
	return (
		<>
			<RoadmapContainer>
				<RoadmapWrapper>
					<CharImg1 data-aos="fade-up">
						<Img src={Char1} />
					</CharImg1>
					<Content>
						<ContentH1 data-aos="fade-up">

						</ContentH1>
						<ContentP>

						</ContentP>
						<RoadmapBtnWrapper data-aos="fade-up">
							<Button >
								Download Whitepaper
							</Button>
						</RoadmapBtnWrapper>
					</Content>
				{/* 
					<CharImg2 data-aos="fade-up">
						<Img src={Char2} />
					</CharImg2>
				*/}	
				</RoadmapWrapper>
			</RoadmapContainer>
		</>
	);
}

export default RoadMapJap;