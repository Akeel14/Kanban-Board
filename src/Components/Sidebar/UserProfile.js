import React from "react";
import {
  UserProfileContainer,
  UserProfileContent,
} from "./Styles/UserProfile.Styles";
import { useAuth } from "../../Context/AuthContext";

function UserProfile() {
  const { currentUser } = useAuth();

  return (
    <UserProfileContainer>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="user profile"
      />

      <UserProfileContent>
        <strong>{currentUser.email}</strong>
      </UserProfileContent>
    </UserProfileContainer>
  );
}

export default UserProfile;
