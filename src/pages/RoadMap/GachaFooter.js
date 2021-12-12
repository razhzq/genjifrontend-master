import { Link } from 'react-router-dom'
import {
    FooterContainer,
    FooterWrapper,
    FooterRow,
    Column1,
    Column2,
    ImgWrapper,
    Img,
    FooterP,
    LogoRow,
    Column3,
    Column4,
    FooterTagLine,
    FooterCopyright,
    DiscordImg,
	TwitterImg
} from './GachaFooterElements'
import FooterMain from '../../assets/footermain.png'
import Discord from '../../assets/discordlogo.png'
import Twitter from '../../assets/twitterlogo.png'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return ( 
          <FooterContainer>
              <FooterWrapper>
                  <FooterRow>
                      <Column1>
                          <ImgWrapper>
                             <Img src={FooterMain}></Img>
                          </ImgWrapper>
                          <FooterTagLine>HIGH RESOLUTION 3D COLLECTION OF 5555 NFTS</FooterTagLine>
                          <FooterCopyright> ©2021 GENJI. All rights reserved</FooterCopyright>
                      </Column1>
                      <Column2>
                      <FooterP>
                              <Link onClick={toggleHome}  style={{ textDecoration: 'none', color: '#fff'}} to='/'>Home</Link>
                           </FooterP>
                           <FooterP>
                             <Link onClick={toggleHome} style={{ textDecoration: 'none', color: '#fff'}} to='/terms-and-conditions'>Terms & Condition</Link>
                           </FooterP>
                           <FooterP>
                           <Link onClick={toggleHome} style={{ textDecoration: 'none' , color: '#fff'}} to='/'>Smart Contract</Link>
                           </FooterP>
                           
                           <LogoRow>
                           <Column3>
								<Link onClick={() => window.location.href = "https://discord.gg/WQpEx6wMqY"} >
									<DiscordImg width="30" src={Discord} />
								</Link>
							</Column3>
							<Column4>
								<Link onClick={() => window.location.href = "https://twitter.com/genjiNFT"} >
									<TwitterImg width="30" src={Twitter} />
								</Link>

							</Column4>
                           </LogoRow>
                      </Column2>
                  </FooterRow>
              </FooterWrapper>
          </FooterContainer>
     );
}
 
export default Footer;