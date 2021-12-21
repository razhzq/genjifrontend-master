import {
	TeamContainer,
	TeamWrapper,
	TeamRow,
	Column1,
	Column2,
	Column3,
	ImgWrap,
	Img,
	TextWrapper,
	TeamH1,
	TeamH2,
	TeamTitle,
	Row,
	TeamItem
} from './TeamElements'
import SixNine from '../../assets/Honorary/69.jpg'
import Adidas from '../../assets/Honorary/adidas.jpg'
import Green from '../../assets/Honorary/420.jpg'
import Purple from '../../assets/Honorary/purple.jpg'
import Devil from '../../assets/Honorary/devil.jpg'
import Samurai from '../../assets/Honorary/samurai.jpg'
import Dolphin from '../../assets/Honorary/dolphin.jpg'
import Jacobb from '../../assets/Honorary/jacobb.jpg'
import Catty from '../../assets/Honorary/cat.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";

const Team = () => {
	useEffect(()=>{Aos.init({duration: 2000});}, []);
	return (
		<TeamContainer>
			<TeamWrapper>
				<TextWrapper>
					<TeamTitle data-aos="fade-up">TEAM:</TeamTitle>
				</TextWrapper>
				<Row data-aos="fade-up">
					<TeamItem>
						<ImgWrap data-aos="fade-up">
							<Img src={SixNine} />
							<TeamH1>FOUNDER</TeamH1>
							<TeamH2>PINNY</TeamH2>
						</ImgWrap>
					</TeamItem>
					<TeamItem>
						<ImgWrap data-aos="fade-up">
							<Img src={Adidas} />
							<TeamH1>CFO</TeamH1>
							<TeamH2>SAM</TeamH2>
						</ImgWrap>
					</TeamItem>
					<TeamItem>
						<ImgWrap data-aos="fade-up">
							<Img src={Green} />
							<TeamH1>CMO</TeamH1>
							<TeamH2>JUSTXN</TeamH2>
						</ImgWrap>
					</TeamItem>
					<TeamItem>
						<ImgWrap>
							<Img src={Purple} />
							<TeamH1>3D ARTIST</TeamH1>
							<TeamH2>NOTDARREN</TeamH2>
						</ImgWrap>
					</TeamItem>

					<TeamItem>
						<ImgWrap>
							<Img src={Devil} />
							<TeamH1>3D ARTIST</TeamH1>
							<TeamH2>TELETUBBIES</TeamH2>
						</ImgWrap>
					</TeamItem>

					<TeamItem>
						<ImgWrap>
							<Img src={Samurai} />
							<TeamH1>3D ARTIST</TeamH1>
							<TeamH2>SONTX3</TeamH2>
						</ImgWrap>
					</TeamItem>
					<TeamItem>
						<ImgWrap>
							<Img src={Dolphin} />
							<TeamH1>DEVELOPER</TeamH1>
							<TeamH2>CODE.DOLPHIN</TeamH2>
						</ImgWrap>
					</TeamItem>
					<TeamItem>
						<ImgWrap>
							<Img src={Jacobb} />
							<TeamH1>DEVELOPER</TeamH1>
							<TeamH2>JACOB</TeamH2>
						</ImgWrap>
					</TeamItem>
					<TeamItem>
						<ImgWrap>
							<Img src={Catty} />
							<TeamH1>GRAPHIC DESIGNER</TeamH1>
							<TeamH2>KYUURIOUSY</TeamH2>
						</ImgWrap>
					</TeamItem>
				</Row>				
			</TeamWrapper>
		</TeamContainer>
	);
}

export default Team;