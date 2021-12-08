import styled from 'styled-components'


export const IntroContainer = styled.div`
	color: #000;
	margin-top: 300px;
  position: relative;
	@media screen and (max-width: 992px) {
		margin-top: 150px;
	}
	@media screen and (max-width: 600) {
		margin-top: 0px;
	}
`

export const IntroWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 700px;
	width: 90%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
	@media screen and (max-width: 992px) {
		display: block;
		height: auto;
	}
`

export const IntroRow = styled.div`
	height: 90%;
	margin-top: 100px;
	display: grid;
	grid-template-columns: 50% 40%;
	align-items: center;
	grid-template-areas: 'col1 col2';
	@media screen and (max-width: 992px) {
	 display: block;
	 height: auto;
	}
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`
export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	text-align: left;
	@media screen and (max-width: 992px) {
		padding-bottom: 0;
    max-width: unset;
	}
`

export const IntroH1 = styled.h1`
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #F8F5B3;
    font-family: 'NexaBold';
    white-space: pre-line;
`
export const IntroP = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: whitesmoke;
    white-space: pre-line;
    font-family: 'NexaLight';
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
	margin-bottom: 100px;
	@media screen and (max-width: 992px) {
		margin: 0 auto;
	}
`

export const Img = styled.video`
	width: 80%;
	margin: 0 0 10px 0;
	padding-right: 0;
	padding-top: 60px;
	@media screen and (max-width: 992px) {
		margin: 0 auto;
		padding-top: 0;
	}
`

export const DotContainer = styled.div`	
	position: absolute;
  width: 13.8vw;
  top: 50px;
  left: 7vw;
	max-width: 200px;
	opacity: 0.5;
	@media screen and (max-width: 992px) {
		display: none;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const DotContainerImg = styled.img`
    width: 80%;

	@media screen and (max-width: 1600px) {
		width: 0%;
		
	}
`

export const IntroJap = styled.div`
	position: absolute;
	width: 150px;
	top: 50px;
	right: 7vw;
	max-width: 200px;
	opacity: 0.5;
	margin-top: 100px;
	margin-right: 100px;
	@media screen and (max-width: 992px) {
		display: none;
	}
`

export const IntroJapImg = styled.img`
   width: 50%;
   
   @media screen and (max-width: 1600px) {
	   width: 0%
   }
`


export const IndiDiv = styled.div`
	width: 50%;
	position: absolute;
	padding-top: 600px;
	margin-left: 22px;
	text-align: left;
	@media screen and (max-width: 992px) {
		position: unset;
    padding-top: 0;
    width: 100%;
	}
`

export const IndiP = styled.p`
     max-width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 24px;
    color: whitesmoke;
    white-space: pre-line;
    font-family: 'NexaLight';
`
