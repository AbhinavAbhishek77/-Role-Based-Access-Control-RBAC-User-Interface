// src/RolePermissionsForm.js
import React, { useState } from 'react';

const RolePermissionsForm = () => {
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    execute: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    console.log('Permissions submitted:', permissions);
    // You can save the permissions to localStorage or send them to the backend here
  };

  return (
    <div>
      <h2>Set Permissions for Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Read
          <input
            type="checkbox"
            name="read"
            checked={permissions.read}
            onChange={handleChange}
          />
        </label>
        <label>
          Write
          <input
            type="checkbox"
            name="write"
            checked={permissions.write}
            onChange={handleChange}
          />
        </label>
        <label>
          Execute
          <input
            type="checkbox"
            name="execute"
            checked={permissions.execute}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Save Permissions</button>
      </form>
    </div>
  );
};

export default RolePermissionsForm;
