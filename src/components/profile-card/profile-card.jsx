// src/components/profile-card/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ avatar, name, location, shot, followers, following }) => {
  return (
    <div className="profile-card">
      <div className="header">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="content">
        <img className="avatar" src={avatar} alt={name} />
        <h2>{name}</h2>
        <h4>{location}</h4>
        <ul className="stats">
          <li>
            <h3>{shot}</h3>
            <p>Shot</p>
          </li>
          <li>
            <h3>{followers}</h3>
            <p>Followers</p>
          </li>
          <li>
            <h3>{following}</h3>
            <p>Following</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
