import { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
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
	ListItem,
	NavIconLinks,
	DropDownNavLinkPage
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import NavbarLogo from '../../assets/navbarlogo.png'
import Discord from '../../assets/discordlogo.png'
import Twitter from '../../assets/twitterlogo.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const NewNavbar = () => {

	const history = useHistory();

	const [conntected, setConnected] = useState(false)

	const connectWallet = () => {
		// try {
		// 	const resp = window.solana.connect();			
		// 	resp.publickKey.toString()
		// } catch (err) {
		// 	console.log(err)
		// }
		window.solana.connect().then(res => {
			console.log(res)
			setConnected(true)
			// res.publickKey.toString()
		}).catch(err => {
			console.log(err)
			setConnected(false)
		})
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

	useEffect(() => { Aos.init({ duration: 1000 }); }, []);

	return (
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo to="/" onClick={toggleHome}><img width="150" src={NavbarLogo}></img></NavLogo>
				<MobileIcon onClick={() => setShow(!show)}>
					<img src="https://img.icons8.com/material-outlined/24/000000/list.png" />
				</MobileIcon>

				<NavWrapper style={{ display: show ? "flex" : "none" }}>
					<NavMenu>
						<NavItem>
							<NavLinks >
								<NavLink>
									<DropDownNavLinkPage>
										<DropdownHeader onClick={() => { toggling(); setIsAbout(false) }}>
											Community
										</DropdownHeader>

										{isOpen && (
											<DropdownContainer>
												<DropdownList >
													<ListItem >
														DAO
													</ListItem>
													<ListItem  >Staking</ListItem>
													<ListItem >Casino</ListItem>

													<ListItem onClick={() => { history.push('/gachapon'); setIsOpen(false) }}>
														<Link
															style={{ textDecoration: 'none', color: 'inherit' }}
															to="/gachapon"
															onClick={(e) => { e.preventDefault(); }}
														>
															Gachapon
														</Link>
													</ListItem>
												</DropdownList>
											</DropdownContainer>
										)}
									</DropDownNavLinkPage>
								</NavLink>
							</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks >
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
									<DropDownNavLinkPage to="">
										<DropdownHeader onClick={() => { toggleDrop(); setIsOpen(false) }}>
											About
										</DropdownHeader>

										{isAbout && (
											<DropdownContainer>
												<DropdownList >
													<ListItem  >Whitepaper</ListItem>
													<ListItem onClick={() => { history.push('/roadmap'); setIsAbout(false) }} >
														<Link
															style={{ textDecoration: 'none', color: 'inherit' }}
															to="/roadmap"
															onClick={(e) => { e.preventDefault(); }}
														>
															Roadmap
														</Link>
													</ListItem>
													<ListItem >Story</ListItem>

												</DropdownList>
											</DropdownContainer>
										)}
									</DropDownNavLinkPage>
								</NavLink>
							</NavLinks>
						</NavItem>

						<NavItem>
							<NavIconLinks to="discover"
								onClick={() => window.location.href = "https://discord.gg/WQpEx6wMqY"}
							>
								<img width="27" src={Discord} />
							</NavIconLinks>
						</NavItem>
						<NavItem>
							<NavIconLinks to="discover"
								onClick={() => window.location.href = "https://twitter.com/genjiNFT"}
							>
								<img width="27" src={Twitter} />
							</NavIconLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink onClick={connectWallet} to="">
							{
								conntected ? "Connected" : "Connect Wallet"
							}
						</NavBtnLink>
					</NavBtn>
				</NavWrapper>

			</NavbarContainer>
		</Nav>
	);
}

export default NewNavbar;