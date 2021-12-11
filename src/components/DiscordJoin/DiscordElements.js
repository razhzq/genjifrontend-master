import styled from 'styled-components'

import DiscordBanner from '../../assets/discordbanner.jpg'

export const DiscordContainer = styled.div`
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
    height: 600px;
	position: relative;
	z-index: 1;
	background-image: url(${DiscordBanner});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	@media screen and (max-width: 992px) {
		background-size: cover;
		background-position-x: right;
	}
`

export const DiscordBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

export const DiscordImg = styled.img`
	width: 100%;
	height: 100%;
	--o-object-fit: cover;
	object-fit: contain;
`

export const DiscordContent = styled.div`
	z-index: 3;
	max-width: 1000px;
	// position: absolute;
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-right: 170px;
	margin-bottom: 200px;
	margin-top: 70px;
	@media screen and (max-width: 600px) {
		margin-right: 0;
		margin-bottom: 150px;	
	}
`

export const DiscordH1 = styled.h1`
	color: #000;
	font-size: 38px;
	padding-bottom: 5px;
	font-family: 'NexaBold';
`

export const DiscordP = styled.p`
     
	color: #000;
	font-size: 24px;
	margin: 0;
	white-space: pre-line;
	font-family: 'NexaLight';
     

`

export const DiscordBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	text-align: left;
`