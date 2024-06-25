// src/components/profile-card/ProfileCardList.jsx
import React from 'react';
import users from './profile-card.json'; // JSON dosyasını içe aktarıyoruz
import ProfileCard from './profile-card'; // ProfileCard bileşenini içe aktarıyoruz

const ProfileCardList = () => {
  return (
    <div>
      {users.map(user => (
        <ProfileCard key={user.id} {...user} /> // Her kullanıcı için ProfileCard bileşeni oluşturuyoruz
      ))}


      {/* {users.map(user=>(<ProfileCard key={user.id} {...user}/>))} */}
    </div>
  ); 
};

export default ProfileCardList;
