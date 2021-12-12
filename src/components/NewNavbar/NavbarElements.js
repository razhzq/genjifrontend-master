import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: transparent;
  height: 80px;
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 999;
  font-family: NexaLight;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`


export const NavbarContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 80px;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	@media screen and (max-width: 992px) {
		flex-wrap: wrap;
	}
`

export const NavLogo = styled(LinkR)`
     color: #fff;
     justify-self: flex-start;
     cursor: pointer;
     font-size: 1.5rem;
     display: flex;
     align-items: center;
     margin-left: 24px;
     font-weight: bold;
     text-decoration: none;


`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 992px) {
			display: flex;        
			cursor: pointer;
			filter: invert(1);
			align-items: center;
			margin-right: 40px;
    }
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 992px) {
		flex-wrap: wrap;
		margin-right: 0;
		padding-left: 0;
	}
`

export const NavItem = styled.li`
  height: 80px;
	@media screen and (max-width: 992px) {
		width: 100%;
		height: 50px;
		display: flex;
    justify-content: center;
	}
`

export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 0.5rem;
	height: 100%;
	cursor: pointer;
	&.active {
	border-bottom: 3px solid #DA70D6;
	}
	@media screen and (max-width: 1200px) {
		padding: 0;
	}
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
		margin-left: 40px;
		margin-right: 1rem;
    @media screen and (max-width: 992px) {
      margin: 0;
    }
`

export const NavBtnLink = styled(LinkR)`
   border-radius: 50px;
   background: #000;
   white-space: nowrap;
   padding: 10px 22px;
   color: #fff;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

	:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
	@media screen and (max-width: 992px) {
		width: 100%;
	}
`
export const NavLink = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 992px) {
		width: 100%;
	}

`

export const NavLinkPage = styled.div`
	border-radius: 50px;
	background: transparent;
	white-space: nowrap;
	padding: 10px 1rem;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

  :hover {
		transition: all 0.2s ease-in-out;
		background: #474747;
		color: #000;
	}
	@media screen and (max-width: 992px) {
		width: 100%;    
	}	
`
export const NavWrapper = styled.div`
	display: flex;
	@media screen and (min-width: 993px) {
		display: flex !important;
	}
	@media screen and (max-width: 992px) {
		width: 100%;
    flex-direction: column;
		padding: 1rem 40px;
		background: rgba(0,0,0,0.7);
		margin-top: 1rem
	}	
`

export const DropdownHeader = styled.div`
    height: 100%;
    width: 100%;
    display: block;
    cursor: pointer;
    line-height: 30px;
    height: 30px;
    color: whitesmoke;
    z-index: 2;
    position: relative;
    -webkit-transition: border-radius .1s linear, background .1s linear, z-index 0s linear;
    -webkit-transition-delay: .8s;
    text-align: center;
`
export const DropdownContainer = styled.div`
    position: absolute;
    display: block;
    z-index: 1;
    height: 0;
    width: 180px;
    -webkit-transition: height .5s ease;
    -webkit-transition-delay: .4s;
    box-shadow: 0 1px 2px rgba(0,0,0,.4);

` 
export const DropdownList = styled.ul`
    background: #fff;
    margin: 0;
	margin-top: 10px;
    padding: 0;
    height: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
	transition: height 0.3s ease;

	:active {
		height: 100%;
        overflow: auto;
	}

`
export const ListItem = styled.li`
     list-style: none;
    text-align: left;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #fff;
	border-radius: 5px;
	
    
	:hover {
		background: #eee;
        color: #333;
	}
	
	:last-of-type {
		border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
	}
`


export const NavIconLinks = styled(LinkS)`
    color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 0.5rem;
	margin-right: 5px;
	margin-left: 5px;
	margin-top: 18px;
	height: 50%;
	width: 45%;
	cursor: pointer;
	border: 1px solid #fff;

	background-image: linear-gradient(to top, #000 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 0.5s ease-in-out; /** I've changed the time for demo purposes **/
    color: black;

	:hover {
		background-position: bottom;
}

    
	&.active {
	border-bottom: 3px solid #DA70D6;
	}
	@media screen and (max-width: 1200px) {
		padding: 0;
	}
`
