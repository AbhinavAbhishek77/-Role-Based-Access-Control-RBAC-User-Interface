
// // src/components/AddUserModal.js
// import React, { useState, useEffect } from 'react';
// import { Modal, Button, TextField, MenuItem, Box, Typography } from '@mui/material';

// const AddUserModal = ({ open, onClose, onAddUser }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         status: 'Active',
//         role: 'User',
//     });

//     // Reset form data when the modal opens
//     useEffect(() => {
//         if (open) {
//             setFormData({
//                 name: '',
//                 email: '',
//                 status: 'Active',
//                 role: 'User',
//             });
//         }
//     }, [open]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = () => {
//         const newUser = {
//             ...formData,
//             id: Date.now(),
//         };
//         onAddUser(newUser);  // Call the parent function to add the new user
//     };

//     return (
//         <div >
//         <Modal open={open} onClose={onClose}>
//             <Box className=' rounded-2xl border-blue-500 border-2'
//                 sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     width: 400,
//                     bgcolor: 'background.paper',
//                     boxShadow: 24,
//                     p: 4,
//                 }}
//             >
//                 <Typography variant="h6" gutterBottom >Add New User</Typography>
//                 <form>
//                     <TextField
//                         label="Name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                     <TextField
//                         label="Email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                     />
//                     <TextField
//                         label="Status"
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         select
//                         fullWidth
//                         margin="normal"
//                     >
//                         <MenuItem value="Active">Active</MenuItem>
//                         <MenuItem value="Inactive">Inactive</MenuItem>
//                     </TextField>
//                     <TextField
//                         label="Role"
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                         select
//                         fullWidth
//                         margin="normal"
//                     >
//                         <MenuItem value="Admin">Admin</MenuItem>
//                         <MenuItem value="User">User</MenuItem>
//                     </TextField>
//                     <Box sx={{ mt: 2 }}>
//                         <Button variant="contained" color="primary" onClick={handleSubmit}>
//                             Add User
//                         </Button>

  


//                         <Button variant="outlined" onClick={onClose} sx={{ ml: 2 }}>
//                             Cancel
//                         </Button>
//                     </Box>
//                 </form>
//             </Box>
//         </Modal>
//         </div>
//     );
// };

// export default AddUserModal;






// src/components/AddUserModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, MenuItem, Box, Typography } from '@mui/material';

const AddUserModal = ({ open, onClose, onAddUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        status: 'Active',
        role: 'User',
    });

    const [errors, setErrors] = useState({});

    // Reset form data when the modal opens
    useEffect(() => {
        if (open) {
            setFormData({
                name: '',
                email: '',
                status: 'Active',
                role: 'User',
            });
            setErrors({});
        }
    }, [open]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.status) newErrors.status = "Status is required.";
        if (!formData.role) newErrors.role = "Role is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const newUser = {
                ...formData,
                id: Date.now(),
            };
            onAddUser(newUser); // Call the parent function to add the new user
            onClose(); // Close the modal
        }
    };

    return (
        <div>
            <Modal open={open} onClose={onClose}>
                <Box
                    className='rounded-2xl border-blue-500 border-2'
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
                    <Typography variant="h6" gutterBottom>
                        Add New User
                    </Typography>
                    <form>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            label="Status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            select
                            fullWidth
                            margin="normal"
                            error={!!errors.status}
                            helperText={errors.status}
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
                            error={!!errors.role}
                            helperText={errors.role}
                        >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                        </TextField>
                        <Box sx={{ mt: 2 }}>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Add User
                            </Button>
                            <Button variant="outlined" onClick={onClose} sx={{ ml: 2 }}>
                                Cancel
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default AddUserModal;



