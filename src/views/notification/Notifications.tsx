import React from 'react';
import type { FC, FormEvent } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Page from 'src/components/Page';
import {

  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles,
  Switch
} from '@material-ui/core';
import wait from 'src/utils/wait';

interface NotificationProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Notifications: FC<NotificationProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    // NOTE: Make API request
    await wait(500);
  };
  const toggleChecked = () => {
    setChecked((prev) => !prev);}

  return (
    <Page
      className={classes.root}
      title="Notification"
    >
    <form onSubmit={handleSubmit}>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader title="Push Notification" />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={1}
            wrap="wrap"
          >
             <Grid
              item
              md={12}
              sm={12}
              xs={12}
            >
              <Typography
                // gutterBottom
                variant="h5"
                color="textSecondary"
              >
              Allow Notification based on Push <Box
          p={0}
          ml={-10}
          display="flex"
          justifyContent="flex-end"
        >
         <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label="Push Notification"
      /></Box>
              </Typography>
          </Grid>
          </Grid>
        </CardContent>
       
        
        {/* <Box
          p={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            color="secondary"
            type="submit"
            variant="contained"
          >
            Save Settings
          </Button>
        </Box> */}
      </Card>
    </form>
    </Page>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
