import React, { useState } from "react";
import {
  Sidebar as StyledSidebar,
  SidebarContainer,
  ToggleButton,
} from "./Styles";
import Logout from "./Logout";
import StickyNotes from "./StickyNotes";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

// function Sidebar() {
//   return (
//     <StyledSidebar>
//       <UserProfile>
//         <img src="/default-avatar.png" alt="User avatar" />
//         <p>John Smith</p>
//       </UserProfile>

//       <SearchBar></SearchBar>

//       <StickyNotes />

//       <Logout />
//     </StyledSidebar>
//   );
// }

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleToggleClick() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <StyledSidebar>
        <UserProfile>
          <img src="/default-avatar.png" alt="User avatar" />
        </UserProfile>

        <SearchBar></SearchBar>

        <StickyNotes />

        <Logout />
      </StyledSidebar>

      <ToggleButton onClick={handleToggleClick}>
        {isCollapsed ? ">" : "<"}
      </ToggleButton>
    </SidebarContainer>
  );
}
export default Sidebar;
