
// // src/components/UserTable.js
// import React, { useState } from 'react';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { users } from '../data';
// import EditUserModal from './EditUserModal';
// import AddUserModal from './AddUserModal';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const UserTable = () => {
//     const [userData, setUserData] = useState(users);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [addUserModalOpen, setAddUserModalOpen] = useState(false);

//     const handleDelete = (id) => {
//         const userToDelete = userData.find(user => user.id === id);
//         if (userToDelete) {
//             setUserData(userData.filter(user => user.id !== id));
//             toast.success(`${userToDelete.name} has been deleted successfully!`);
//         }
//     };
    

//     const handleEdit = (user) => {
//         setSelectedUser(user);
//         setModalOpen(true);
//     };


   
//     const handleSaveUser = (updatedUser) => {
//         setUserData(userData.map(user => user.id === updatedUser.id ? updatedUser : user));
//         setModalOpen(false);
//     };

//     const handleAddUser = (newUser) => {
//         setUserData(prevData => [...prevData, newUser]);
//         setAddUserModalOpen(false);  // Close modal after adding user
//         toast.success(`${newUser.name} has been added successfully!`);
//     };
    

//     const handleOpenAddUserModal = () => {
//         // Reset the form data in AddUserModal before opening it
//         setAddUserModalOpen(true);
//     };

//     return (
//         <div >
//             <TableContainer className='border-2 border-black' component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow className='bg-red-300'>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Email</TableCell>
//                             <TableCell>Status</TableCell>
//                             <TableCell>Role</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {userData.map((user) => (
//                             <TableRow key={user.id}>
//                                 <TableCell>{user.name}</TableCell>
//                                 <TableCell>{user.email}</TableCell>
//                                 <TableCell>{user.status}</TableCell>
//                                 <TableCell>{user.role}</TableCell>
//                                 <TableCell>
//                                     <IconButton onClick={() => handleEdit(user)}>
//                                         <EditIcon />
//                                     </IconButton>
//                                     <IconButton onClick={() => handleDelete(user.id)}>
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginTop: '16px' }}
//                 onClick={handleOpenAddUserModal}  // Open the add user modal and reset the form data
//             >
//                 Add User
//             </Button>




//             {/* Edit User Modal */}
//             <EditUserModal
//                 open={modalOpen}
//                 onClose={() => setModalOpen(false)}
//                 user={selectedUser}
//                 onSaveUser={handleSaveUser}
//             />

//             {/* Add User Modal */}
//             <AddUserModal
//                 open={addUserModalOpen}
//                 onClose={() => setAddUserModalOpen(false)}
//                 onAddUser={handleAddUser}
//             />
//         </div>
//     );
// };

// export default UserTable;





import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { users } from '../data';
import EditUserModal from './EditUserModal';
import AddUserModal from './AddUserModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserTable = () => {
    const [userData, setUserData] = useState(users);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [addUserModalOpen, setAddUserModalOpen] = useState(false);

    const handleDelete = (id) => {
        const userToDelete = userData.find(user => user.id === id);
        if (userToDelete) {
            setUserData(userData.filter(user => user.id !== id));
            toast.success(`${userToDelete.name} has been deleted successfully!`);
        }
    };
    
    const handleEdit = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const handleSaveUser = (updatedUser) => {
        setUserData(userData.map(user => user.id === updatedUser.id ? updatedUser : user));
        setModalOpen(false);
    };

    const handleAddUser = (newUser) => {
        setUserData(prevData => [...prevData, newUser]);
        setAddUserModalOpen(false);  // Close modal after adding user
        toast.success(`${newUser.name} has been added successfully!`);
    };

    const handleOpenAddUserModal = () => {
        // Reset the form data in AddUserModal before opening it
        setAddUserModalOpen(true);
    };

    return (
        <div>
            <TableContainer className="mb-4 border-2 border-black rounded-lg shadow-md" component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow className="bg-red-300">
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleEdit(user)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(user.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add User Button */}
            <Button
                variant="contained"
                color="primary"
                className="mt-4 w-full sm:w-auto"
                onClick={handleOpenAddUserModal}
            >
           
                Add User
            </Button>

            {/* Edit User Modal */}
            <EditUserModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                user={selectedUser}
                onSaveUser={handleSaveUser}
            />

            {/* Add User Modal */}
            <AddUserModal
                open={addUserModalOpen}
                onClose={() => setAddUserModalOpen(false)}
                onAddUser={handleAddUser}
            />

            <ToastContainer />
        </div>
    );
};

export default UserTable;
