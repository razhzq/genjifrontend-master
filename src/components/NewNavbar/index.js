import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
	Nav,
	NavLogo,
	NavbarContainer,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	NavLink,
	NavLinkPage,
	NavWrapper,
	DropdownHeader,
	DropdownContainer,
	DropdownList,
	ListItem
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import NavbarLogo from '../../assets/navbarlogo.png'
import Discord from '../../assets/discord_logo-01.png'
import Twitter from '../../assets/twitter_logo-01.png'
import Aos from 'aos';
import "aos/dist/aos.css";



const NewNavbar = () => {

	const connectWallet = () => {
		try {
			const resp = window.solana.connect();
			resp.publickKey.toString()
		} catch (err) {

		}
	}

	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	const [show, setShow] = useState(false)

	//dropdown
	const [isOpen, setIsOpen] = useState(false);
	const [isAbout, setIsAbout] = useState(false);
	
	
	const toggleDrop = () => setIsAbout(!isAbout);
	const toggling = () => setIsOpen(!isOpen);

	useEffect(()=>{Aos.init({duration: 1000});}, []);


	return (
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo to="/" onClick={toggleHome}><img width="150" src={NavbarLogo}></img></NavLogo>
				<MobileIcon onClick={() => setShow(!show)}>
					<img src="https://img.icons8.com/material-outlined/24/000000/list.png" />
				</MobileIcon>

				<NavWrapper style={{display: show ? "flex" : "none"}}>
					<NavMenu>
						<NavItem>
							<NavLinks to="about" >
								<NavLink>
									<NavLinkPage>
									<DropdownHeader onClick={toggling}>
											Community
											</DropdownHeader>
										
										{isOpen && (
											<DropdownContainer>
												<DropdownList data-aos="fade-down">
													<ListItem  >DAO</ListItem>
													<ListItem  >Staking</ListItem>
													<ListItem >Casino</ListItem>
													<ListItem >Gacha</ListItem>
												</DropdownList>
											</DropdownContainer>
											)}	
									</NavLinkPage>
								</NavLink>
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/genjimerch" >
								<NavLink>
									<NavLinkPage>
										<Link style={{ textDecoration: 'none', color: '#fff' }} to="/genjimerch">
											GenjiMerch
										</Link>
									</NavLinkPage>
								</NavLink>
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover">
								<NavLink>
									<NavLinkPage to="">
									<DropdownHeader onClick={toggleDrop}>
											About
											</DropdownHeader>
										
										{isAbout && (
											<DropdownContainer>
												<DropdownList  data-aos="fade-down"> 
													<ListItem  >Whitepaper</ListItem>
													<ListItem  >Roadmap</ListItem>
													<ListItem >Story</ListItem>
												
												</DropdownList>
											</DropdownContainer>
											)}	
								   	 </NavLinkPage>
								</NavLink>
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover"
								onClick={() => window.location.href = "https://discord.gg/WQpEx6wMqY"}
							>
								<img width="35" src={Discord} />
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover"
								onClick={() => window.location.href = "https://twitter.com/genjiNFT"}
							>
								<img width="35" src={Twitter} />
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink onClick={connectWallet} to="">Connect Wallet</NavBtnLink>
					</NavBtn>
				</NavWrapper>

			</NavbarContainer>
		</Nav>
	);
}

export default NewNavbar;

