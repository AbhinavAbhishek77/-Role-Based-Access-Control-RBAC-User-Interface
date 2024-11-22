
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







import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, MenuItem, Box, Typography } from '@mui/material';

const AddUserModal = ({ open, onClose, onAddUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        status: 'Active',
        role: 'User',
    });

    // Reset form data when the modal opens
    useEffect(() => {
        if (open) {
            setFormData({
                name: '',
                email: '',
                status: 'Active',
                role: 'User',
            });
        }
    }, [open]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const newUser = {
            ...formData,
            id: Date.now(),
        };
        onAddUser(newUser);  // Call the parent function to add the new user
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 500,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '8px',
                }}
                className="border-2 border-blue-500 rounded-2xl p-4 max-w-lg mx-auto"
            >
                <Typography variant="h6" gutterBottom className="text-lg font-semibold">
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
                    <Box sx={{ mt: 2 }} className="flex justify-between">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            className="w-1/3 mr-2"
                        >
                            Add User
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={onClose}
                            className="w-1/3"
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default AddUserModal;
