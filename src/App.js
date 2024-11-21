





import React, { useState } from "react";
import { AuthProvider } from './context/AuthContext';  // Import the AuthProvider

import { Container, Typography, Grid, Button } from "@mui/material";
import UserTable from "./components/UserTable";
import RoleTable from "./components/RoleTable";
import PermissionsModal from "./components/PermissionsModal";
import { users as initialUsers, roles as initialRoles } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [rolePermissions, setRolePermissions] = useState({});
  const [editingRole, setEditingRole] = useState(null); // Track the role being edited

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
    setEditingRole(role); // Set the role being edited
    setRolePermissions(role.permissions); // Populate modal with existing permissions
    setModalOpen(true); // Open the modal
  };

  const handleSavePermissions = (updatedPermissions) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === editingRole.id
          ? { ...role, permissions: updatedPermissions } // Update role permissions
          : role
      )
    );
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="pt-8 w-full h-screen bg-blue-200">
      <Container>
        <Typography variant="h4" gutterBottom>
          <p className="text-6xl mb-8 font-bold">Admin Dashboard</p>
        </Typography>
        <Grid container spacing={2}>
          {/* User Management Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">User Management</Typography>
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
        <ToastContainer />
      </Container>
    </div>
  );
};

export default App;


