import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarToggle,
  SidebarToggleLine,
  SidebarContent,
  SidebarSection,
  SidebarSectionTitle,
  SidebarSectionContent,
} from "../Styles/Sidebar.Styles";
import UserProfile from "../UserProfile";
import Logout from "../Logout";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer>
      <SidebarToggle onClick={handleToggleClick}>
        <SidebarToggleLine />
        <SidebarToggleLine />
        <SidebarToggleLine />
      </SidebarToggle>

      <SidebarContent isOpen={isOpen}>
        <SidebarSection>
          <SidebarSectionTitle>User Profile</SidebarSectionTitle>
          <SidebarSectionContent>
            <UserProfile />
          </SidebarSectionContent>
        </SidebarSection>

        <SidebarSection>
          <SidebarSectionTitle>Logout</SidebarSectionTitle>
          <SidebarSectionContent>
            <Logout />
          </SidebarSectionContent>
        </SidebarSection>
      </SidebarContent>
    </SidebarContainer>
  );
}
export default Sidebar;
