import Item1 from '../../assets/NFT/one.jpg'
import Item2 from '../../assets/NFT/two.jpg'
import Item3 from '../../assets/NFT/three.jpg'
import Item4 from '../../assets/NFT/four.jpg'
import Item5 from '../../assets/NFT/snake.jpg'
import Item6 from '../../assets/NFT/frost.jpg'
import Item7 from '../../assets/NFT/starwars.jpg'
import Item8 from '../../assets/NFT/piece.jpg'
import ComingSoon from '../../assets/comingsoon.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderContainer, SliderWrapper, CloudStrikeImg, DotXImg, Img, DotXImgWrapper } from './SliderElements'
import CloudStrike from '../../assets/cloudstrike.png'
import DotX from '../../assets/dotx.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";

const SliderSection = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
	}
	useEffect(()=>{Aos.init({duration: 2000});}, []);
	return (
		<SliderContainer >
			<SliderWrapper  data-aos="fade-up">
				<CloudStrikeImg data-aos="fade-up">
					<Img src={CloudStrike} />
				</CloudStrikeImg>
				<Slider data-aos="fade-up" {...settings} className="home-slider">
					<div>
						<img width="90%" src={Item5} />
					</div>
					<div>
						<img width="90%" src={Item6} />
					</div>
					<div>
						<img width="90%" src={Item7} />
					</div>
					<div>
						<img width="90%" src={Item8} />
					</div>
					
					<div>
						<img width="90%" src={Item1} />
					</div>
					<div>
						<img width="90%" src={Item2} />
					</div>
					<div>
						<img width="90%" src={Item3} />
					</div>
					<div>
						<img width="90%" src={Item4} />
					</div>
					
					
				</Slider>
				<DotXImgWrapper data-aos="fade-up">
					<DotXImg width="600px" src={DotX} />
				</DotXImgWrapper>
			</SliderWrapper>
		</SliderContainer>

	);
}

export default SliderSection;