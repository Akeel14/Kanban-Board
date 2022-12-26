import React from "react";
import { UserProfileContainer, UserProfileContent } from "./Styles/UserProfile.Styles";

function UserProfile() {
  return (
    <UserProfileContainer>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user profile" />
      <UserProfileContent>
        <p>Akeel Lashley</p>
      </UserProfileContent>
    </UserProfileContainer>
  );
}

export default UserProfile;
