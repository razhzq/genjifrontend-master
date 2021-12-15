import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarPage
     } from './SidebarElements'





const Sidebar = ({ side, toggleSide }) => {
    return ( 
        <SidebarContainer side={side} onClick={toggleSide}>
            <Icon onClick={toggleSide}>
               
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarPage to="" onClick={toggleSide}>Community</SidebarPage>
                    <SidebarPage to="/roadmap" onClick={toggleSide}>RoadMap</SidebarPage>
                    <SidebarPage to="/genjimerch" onClick={toggleSide}>GenjiMerch</SidebarPage>
                    <SidebarPage to="/gachapon" onClick={toggleSide}>Gachapon</SidebarPage>
                </SidebarMenu>
                <SideBtnWrap>
                
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

     );
}
 
export default Sidebar;