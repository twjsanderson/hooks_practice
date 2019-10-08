import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users'); // calling an api using the 'users' api

    return (
        <ul>
            {users.map(user =>
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    );
};

export default UserList;