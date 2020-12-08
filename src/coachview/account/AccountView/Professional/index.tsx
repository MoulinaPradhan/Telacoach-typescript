import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';
import Page from 'src/components/Page';
interface GeneralProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Professional: FC<GeneralProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Page
      className={classes.root}
      title="Professional Details"
    >
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid
        item
        lg={4}
        md={12}
        xl={3}
        xs={12}
      >
        {/* <ProfileDetails user={user} /> */}
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        xl={9}
        xs={12}
      >
        <GeneralSettings user={user} />
      </Grid>
    </Grid>
    </Page>
  );
}

Professional.propTypes = {
  className: PropTypes.string
};

export default Professional;
