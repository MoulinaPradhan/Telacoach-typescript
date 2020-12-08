import React from 'react';
import type { FC, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
// import  { User ,UserTypes} from 'src/types/user';

interface CoachAuthGuardProps {
  children?: ReactNode;
  UserTypes:0;
}

const CoachAuthGuard: FC<CoachAuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const UserTypes=0;
 

  if (!isAuthenticated && UserTypes==0) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      {children}
    </>
  );
};

CoachAuthGuard.propTypes = {
  children: PropTypes.node
};

export default CoachAuthGuard;
