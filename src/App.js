import React, { useState } from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import UserTable from "./components/UserTable";
import RoleTable from "./components/RoleTable";
import PermissionsModal from "./components/PermissionsModal";
import { users as initialUsers, roles as initialRoles } from "./data";

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [rolePermissions, setRolePermissions] = useState({});

  // Handle User Operations
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleAddUser = () => {
    // Add User Functionality (Can be extended)
    alert("Add User button clicked");
  };

  // Handle Role Permissions
  const handleEditRolePermissions = (role) => {
    setRolePermissions(role.permissions);
    setModalOpen(true);
  };

  const handleSavePermissions = (updatedPermissions) => {
    setRolePermissions(updatedPermissions);
    setModalOpen(false);
  };

  return (
<div className="pt-8 w-full h-screen bg-blue-200">
    <Container>
        {/* <p className="text-5xl text-red-700">ddd</p> */}
      <Typography variant="h4" gutterBottom>
        <p className="text-6xl mb-8 font-bold">Admin Dashboard</p>
      </Typography>
      <Grid container spacing={2}>
        {/* User Management Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >User Management</Typography>
          <UserTable
            users={users}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
            onAddUser={handleAddUser}
          />
        </Grid>

        {/* Role Management Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Role Management</Typography>
          <RoleTable
            roles={roles}
            onEditRolePermissions={handleEditRolePermissions}
          />
        </Grid>
      </Grid>

      {/* Permissions Modal for editing user or role permissions */}
      <PermissionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        user={selectedUser}
        onSaveUser={handleSaveUser}
        rolePermissions={rolePermissions}
        onSavePermissions={handleSavePermissions}
      />
    </Container>
    </div>
  );
};

export default App;






