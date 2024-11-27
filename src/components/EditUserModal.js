
import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, MenuItem, Box, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

const EditUserModal = ({ open, onClose, user, onSaveUser }) => {
    const [formData, setFormData] = useState({});



    
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                status: user.status,
                role: user.role,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
       

    };

    const handleSubmit = () => {
        onSaveUser({ ...user, ...formData }); 
        toast.success('Changes made successfully');
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" gutterBottom>Edit User</Typography>
                <form>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        select
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                    <TextField
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        select
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="User">User</MenuItem>
                    </TextField>
                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                        <Button variant="outlined" onClick={onClose} sx={{ ml: 2 }}>
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default EditUserModal;




