import React from 'react';
import UserTable from '../components/Table'; // Import UserTable component

function UserScreen() {
  return (
    <div>
      <h1>User Management</h1>
      <UserTable /> {/* Render the table */}
    </div>
  );
}

export default UserScreen;
