import React from "react";

const ProfileView = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <p>{props.email}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default ProfileView;
