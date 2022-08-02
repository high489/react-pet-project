import React, { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

interface MyLinkProps {
  children: string;
  to: string;
}

const MyLink: FC<MyLinkProps> = ({children, to}) => {
  const match = useMatch(to)

  return (
    <Link
      to={to}
      style={{
        color: match ? 'red' : 'black'
      }}
    >
      {children}
    </Link>
  );
};

export { MyLink };