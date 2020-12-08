import React,{useState} from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import ProfileDetails from './General/ProfileDetails';
import GeneralSettings from './General/GeneralSettings';
import Page from 'src/components/Page';
import AvatarEditor from 'react-avatar-editor'


interface GeneralProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfilePhoto: FC<GeneralProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user } = useAuth();
  const [state, setState] = useState({ image: 'avatar.jpg',
  allowZoomOut: false,
  position: { x: 0.5, y: 0.5 },
  scale: 1,
  rotate: 0,
  borderRadius: 0,
  preview: null,
  width: 200,
  height: 200,});
  return (
    <Page
      className={classes.root}
      title="Change Profile Photo"
    >
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={6}
      {...rest}
    >
      
      <Box ml={40}
      mt={5}>
      <Grid
       direction="column"
       alignItems="center"
       justify="center"
        item
       
        lg={12}
        md={12}
        xl={12}
        xs={12}
      >
         <AvatarEditor
        image="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        width={250}
       
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
     
        {/* <ProfileDetails user={user} /> */}
       
      </Grid>
      </Box>
    </Grid>
    </Page>
  );
}

ProfilePhoto.propTypes = {
  className: PropTypes.string
};

export default ProfilePhoto;
