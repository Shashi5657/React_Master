import React from "react";
import { USERS_DATA } from "../data";
import ProfileView from "./ProfileView";
console.log(USERS_DATA, "users");

const ProfilesView = () => {
  return (
    <div>
      <h1>User Profiles</h1>
      {USERS_DATA.map((user) => (
        <ProfileView key={user.email} {...user} />
      ))}
    </div>
  );
};

export default ProfilesView;
