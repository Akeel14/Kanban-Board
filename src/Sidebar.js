import React from "react";
import { Sidebar as StyledSidebar } from "./Styles";
import Logout from "./Logout";
import StickyNotes from "./StickyNotes";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

function Sidebar() {
  return (
    <StyledSidebar>
      <UserProfile>
        <img src="/default-avatar.png" alt="User avatar" />
        <p>John Smith</p>
      </UserProfile>

      <SearchBar></SearchBar>

      <StickyNotes />

      <Logout />
    </StyledSidebar>
  );
}

export default Sidebar;
