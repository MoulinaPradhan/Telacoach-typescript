import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';

interface SubscriptionProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  overview: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start'
    }
  },
  productImage: {
    marginRight: theme.spacing(1),
    height: 48,
    width: 48
  },
  details: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }
}));

const Subscription: FC<SubscriptionProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [subscription, setSubscription] = useState<any | null>(null);

  const getSubscription = useCallback(async () => {
    try {
      const response = await axios.get('/api/account/subscription');

      if (isMountedRef.current) {
        setSubscription(response.data.subscription);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getSubscription();
  }, [getSubscription]);

  if (!subscription) {
    return null;
  }

  return (
    <Page
    className={classes.root}
    title="My Plan"
  >
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Pending" />
      <Divider />
      <CardContent>
        <Paper variant="outlined">
          <Box className={classes.overview}>
            <div>
              <Typography
                display="inline"
                variant="h4"
                color="textPrimary"
              >
                {/* {subscription.currency}
                {subscription.price} */}
              </Typography>
              <Typography
                display="inline"
                variant="subtitle1"
              >
                Motivational Course
              </Typography>
            </div>
            <Box
              display="flex"
              alignItems="center"
            >
           
              <Typography
                variant="overline"
                color="textSecondary"
              >
            
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.details}>
            <div>
              <Typography
                variant="body2"
                color="textPrimary"
              >$ 700
                {/* {`${subscription.proposalsLeft} proposals left`} */}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {`${subscription.templatesLeft}0 minutes`}
              </Typography>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {/* {`${subscription.invitesLeft} invites left`} */}1 session
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {/* {`${subscription.adsLeft} ads left`} */}
              </Typography>
            </div>
            <div>
              {subscription.hasAnalytics && (
                <Typography
                  variant="body2"
                  color="textPrimary"
                >
                 Validity: 30 days
                </Typography>
              )}
              
            </div>
          </Box>
        </Paper>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
       </Box>
    </CardContent>
    </Card>

{/*demo*/}
<Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Upcoming" />
      <Divider />
      <CardContent>
        <Paper variant="outlined">
          <Box className={classes.overview}>
            <div>
              <Typography
                display="inline"
                variant="h4"
                color="textPrimary"
              >
                {/* {subscription.currency}
                {subscription.price} */}
              </Typography>
              <Typography
                display="inline"
                variant="subtitle1"
              >
                Fitness Course
              </Typography>
            </div>
            <Box
              display="flex"
              alignItems="center"
            >
           
              <Typography
                variant="overline"
                color="textSecondary"
              >
             
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.details}>
            <div>
              <Typography
                variant="body2"
                color="textPrimary"
              >$ 100
                {/* {`${subscription.proposalsLeft} proposals left`} */}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {`${subscription.templatesLeft}0 minutes`}
              </Typography>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {/* {`${subscription.invitesLeft} invites left`} */}1 session
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {/* {`${subscription.adsLeft} ads left`} */}
              </Typography>
            </div>
            <div>
              {subscription.hasAnalytics && (
                <Typography
                  variant="body2"
                  color="textPrimary"
                >
                 Validity: 10 days
                </Typography>
              )}
              
            </div>
          </Box>
        </Paper>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
       </Box>
    </CardContent>
    </Card>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="History" />
      <Divider />
      <CardContent>
        <Paper variant="outlined">
          <Box className={classes.overview}>
            <div>
              <Typography
                display="inline"
                variant="h4"
                color="textPrimary"
              >
                {/* {subscription.currency}
                {subscription.price} */}
              </Typography>
              <Typography
                display="inline"
                variant="subtitle1"
              >
              Academic Course
              </Typography>
            </div>
            <Box
              display="flex"
              alignItems="center"
            >
           
              <Typography
                variant="overline"
                color="textSecondary"
              >
           
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.details}>
            <div>
              <Typography
                variant="body2"
                color="textPrimary"
              >$ 200
                {/* {`${subscription.proposalsLeft} proposals left`} */}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {`${subscription.templatesLeft}0 minutes`}
              </Typography>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {/* {`${subscription.invitesLeft} invites left`} */}1 session
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                {/* {`${subscription.adsLeft} ads left`} */}
              </Typography>
            </div>
            <div>
              {subscription.hasAnalytics && (
                <Typography
                  variant="body2"
                  color="textPrimary"
                >
                 Validity: 15 days
                </Typography>
              )}
              
            </div>
          </Box>
        </Paper>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
       </Box>
    </CardContent>
    </Card>

    </Page>
  );
};

Subscription.propTypes = {
  className: PropTypes.string
};

export default Subscription;
