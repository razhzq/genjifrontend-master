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





const Sidebar = ({ isOpen, toggle }) => {
    return ( 
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
               
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarPage to="" onClick={toggle}>Community</SidebarPage>
                    <SidebarPage to="/roadmap" onClick={toggle}>RoadMap</SidebarPage>
                    <SidebarPage to="/genjimerch" onClick={toggle}>GenjiMerch</SidebarPage>
                    <SidebarPage to="/gachapon" onClick={toggle}>Gachapon</SidebarPage>
                </SidebarMenu>
                <SideBtnWrap>
                
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

     );
}
 
export default Sidebar;