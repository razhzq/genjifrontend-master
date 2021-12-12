import styled from 'styled-components'


export const FooterContainer = styled.div`
	background-color: transparent;
`

export const FooterWrapper = styled.div`
	display: block;
	z-index: 1;
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;	
`

export const FooterRow = styled.div`
	display: flex;   
	align-items: center;
	justify-content: space-around;
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`

export const FooterP = styled.p`
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	color: #fff;
	font-family: 'NexaBold';
	padding-left: 50px;
`

export const FooterTagLine = styled.p`
	max-width: 600px;
	font-size: 22px;
	line-height: 24px;
	color: #F8F5B3;
	padding-bottom: 100px;
	font-family: 'NexaBold';
	@media screen and (max-width: 600px) {
		padding-bottom: 50px;
	}
`

export const FooterCopyright = styled.p`
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	color: #fff;
	font-family: 'NexaBold';    
`


export const Column1 = styled.div`
	margin-top: 40px;
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
	text-align: left;
`

export const Column2 = styled.div`
	margin-top: 40px;
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`

export const Column3 = styled.div`
width: 40px;
height: 50px;
margin-left: 20px;
margin-right: 20px;
border: 1px solid #fff;
	
    background-image: linear-gradient(to top, #000 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 0.5s ease-in-out; /** I've changed the time for demo purposes **/
    color: black;

	:hover {
		background-position: bottom;
`

export const Column4 = styled.div`
width: 40px;
height: 50px;
margin-left: 20px;
margin-right: 20px;
border: 1px solid #fff;


	background-image: linear-gradient(to top, #000 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 0.5s ease-in-out; /** I've changed the time for demo purposes **/
    color: black;

	:hover {
		background-position: bottom;
`

export const LogoRow = styled.div`
    display: flex;	
	justify-content: space-evenly;
	align-items: left;
	margin-left: 27px;
	height: 80px;
`

export const ImgWrapper = styled.div`
	max-width: 400px;
	height: 50px;
	margin-bottom: 40px;
`

export const Img = styled.img`
	width: 60%;
	margin: 0 0 10px 0;
	padding-right: 0;
`
export const DiscordImg = styled.img`
width: 30px;
margin-top: 10px;
margin-left: 5px;
 
`

export const TwitterImg = styled.img`
width: 30px;
margin-top: 10px;
margin-left: 5px;
  
`