import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const PermissionsModal = ({
  open,
  onClose,
  user,
  onSaveUser,
  rolePermissions,
  onSavePermissions,
}) => {
  const [permissions, setPermissions] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  // Ensure permissions is an array on user change
  useEffect(() => {
    if (user) {
      setUserDetails(user);
      setPermissions(Array.isArray(user.permissions) ? user.permissions : []);
    }
  }, [user]);

  // Ensure permissions is an array when rolePermissions change
  useEffect(() => {
    if (rolePermissions) {
      setPermissions(Array.isArray(rolePermissions) ? rolePermissions : []);
    }
  }, [rolePermissions]);

  const handleTogglePermission = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((perm) => perm !== permission)
        : [...prevPermissions, permission]
    );
  };

  const handleSave = () => {
    if (userDetails) {
      const updatedUser = { ...userDetails, permissions };
      onSaveUser(updatedUser); // Save user data with updated permissions
      
    } else {
      onSavePermissions(permissions); // Save role permissions if applicable
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          padding: 4,
          width: 300,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit Permissions for {userDetails?.name || 'Role'}
        </Typography>
        {['Read', 'Write', 'Delete'].map((perm) => (
          <FormControlLabel
            key={perm}
            control={<Checkbox checked={permissions.includes(perm)} onChange={() => handleTogglePermission(perm)} />}
            label={perm}
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginTop: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default PermissionsModal;



