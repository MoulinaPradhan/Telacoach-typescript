import React from 'react';
import type { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import  { User ,UserType} from 'src/types/user';

interface ClientAuthGuardProps {
  children?: ReactNode;
  // UserTypes:1;
}

const ClientAuthGuard: FC<ClientAuthGuardProps> = ({ children }) => {
  const { isAuthenticated, userType } = useAuth();
  const userTypes=1;


  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  } else {
    if (userType == UserType.client) {

    }
  }

  return (
    <>
      {children}
    </>
  );
};

ClientAuthGuard.propTypes = {
  children: PropTypes.node
};

export default ClientAuthGuard;
