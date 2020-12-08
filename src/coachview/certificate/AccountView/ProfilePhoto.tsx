import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import ProfileDetails from './General/ProfileDetails';
import GeneralSettings from './General/GeneralSettings';

interface GeneralProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfilePhoto: FC<GeneralProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={6}
      {...rest}
    >
      
      <Box p={5}
      ml={45}
      >
      <Grid
        item
       
        lg={12}
        md={12}
        xl={12}
        xs={12}
      >
        
        <ProfileDetails user={user} />
       
      </Grid>
      </Box>
    </Grid>
  );
}

ProfilePhoto.propTypes = {
  className: PropTypes.string
};

export default ProfilePhoto;
