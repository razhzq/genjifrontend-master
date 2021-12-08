import styled from 'styled-components'


export const RoadmapContainer = styled.div`

`

export const RoadmapWrapper = styled.div`
	display: inline-block;
	vertical-align: middle;
	z-index: 1;
	height: 500px;
	width: 90%;
	max-width: 1100px;
	margin: 0 auto;
	@media screen and (max-width: 600px) {
		height: auto;
	}
`

export const CharImg1 = styled.div`
	width: 100%;
	height: 200px;
  @media screen and (max-width: 600px) {
		height: auto;
	}
`

export const CharImg2 = styled.div`
	width: 100%;
	height: 30%;
	@media screen and (max-width: 600px) {
		height: auto;
	}
`

export const Content = styled.div`
	height: 200px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
	text-align: center;
	@media screen and (max-width: 600px) {
		height: auto;
		margin-bottom: 2rem
	}
`

export const ContentH1 = styled.h1`
	font-size: 28px;
	line-height: 1.1;
	font-weight: 600;
	color: #F8F5B3;
	font-family: 'NexaBold';
`

export const ContentP = styled.p`
	font-size: 22px;
	line-height: 24px;
	color: whitesmoke;
	white-space: pre-line;
	font-family: 'NexaLight';
`

export const RoadmapBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
`

export const Img = styled.img`
	width: 100%;
	max-width: 500px;
`
