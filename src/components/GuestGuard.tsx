import React from 'react';
import type { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { UserType } from '../types/user';

interface GuestGuardProps {
  children?: ReactNode;
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated, userType } = useAuth();

  if (isAuthenticated) {
    console.log(`authenticated ${userType}`)
    if (userType == UserType.client) {
        return <Redirect to="/client/dashboard" />;
    } else {
      return <Redirect to="/coach/dashboard" />;
    }
  }

  return (
    <>
      {children}
    </>
  );
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
