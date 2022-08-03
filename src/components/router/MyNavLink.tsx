import React, { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

interface MyNavLinkProps {
  children: any;
  to: string;
}

const MyNavLink: FC<MyNavLinkProps> = ({children, to}) => {
  const match = useMatch(to)

  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        color: match ? 'red' : 'black',
        marginRight: '5px'
      }}
    >
      {children}
    </Link>
  );
};

export { MyNavLink };