import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Demo from '../components/demo';
const UserPage = props => {
  return (
    <div className="container">
      <Demo/>
      <ProfileCard />
    </div>
  );
};

export default UserPage;