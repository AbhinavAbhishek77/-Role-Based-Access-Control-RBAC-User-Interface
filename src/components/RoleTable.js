import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const RoleTable = ({ roles, onEditRolePermissions }) => {
  return (
    <TableContainer className='border-2 border-black' component={Paper}>
      <Table>
        <TableHead>
          <TableRow className='bg-red-300'>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(', ')}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => onEditRolePermissions(role)}>
                  Edit Permissions
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoleTable;





