import React, { FC } from 'react';
import { useGetUsersQuery } from '../../store';
import { UserItem } from './UserItem';

const UsersList: FC = () => {
  const {data: users} = useGetUsersQuery(3)

  return (
    <div>
      {users && users.map(user => 
        <UserItem key={user.id} user={user} />
      )}
    </div>
  );
};

export { UsersList };