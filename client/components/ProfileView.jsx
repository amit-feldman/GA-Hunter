import React from 'react';
import ItemList from './ItemList.jsx';

function ProfileView() {
  return (
    <div id="profile">
      <h2>Name: </h2>
      <p>Summary: </p>
      <ItemList />
    </div>
  );
}

export default ProfileView;
