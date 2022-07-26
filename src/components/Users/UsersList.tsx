import React, { FC } from 'react';
import { usersApi } from '../../store/services/UsersService';
import UserItem from './UserItem';

const UsersList: FC = () => {
  const {data: users} = usersApi.useFetchAllUsersQuery(5)
  return (
    <div>
      {users && users.map(user => 
        <UserItem key={user.id} user={user} />
      )}
    </div>
  );
};

export default UsersList;