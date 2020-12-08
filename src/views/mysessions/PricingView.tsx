import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    height: '100%',
    paddingTop: 120,
    paddingBottom: 120
  },
  product: {
    position: 'relative',
    padding: theme.spacing(5, 3),
    cursor: 'pointer',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  productImage: {
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    top: -24,
    left: theme.spacing(3),
    height: 48,
    width: 48,
    fontSize: 24
  },
  recommendedProduct: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
  chooseButton: {
    backgroundColor: theme.palette.common.white
  }
}));

const PricingView: FC = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Plan's Available"
    >
      <Container maxWidth="sm">
        {/* <Typography
          align="center"
          variant="h3"
          color="textPrimary"
        >
         Plan's Available
        </Typography> */}
        <Box mt={-10}>
          <Typography
            align="center"
            variant="h3"
            color="textPrimary"
          >
          My Sessions
          </Typography>
        </Box>
      </Container>
      <Box mt={10}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={classes.product}
                elevation={1}
              >
                {/* <img
                  alt="Product"
                  className={classes.productImage}
                  src="/static/images/products/product_standard.svg"
                /> */}
                <Typography
                  component="h3"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                 Pending
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                    color="textPrimary"
                  >
                    $5
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                    color="textSecondary"
                  >
                    /month
                  </Typography>
                </div>
                <Typography
                  variant="overline"
                  color="textSecondary"
                >
                  Max 1 user
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Typography
                  variant="body2"
                  color="textPrimary"
                >
                  20 videos/month
                  <br />
                  10 lectures
                  <br />
                 Lessons
                  <br />
                  Email alerts
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                {/* <Button
                  variant="contained"
                  fullWidth
                  className={classes.chooseButton}
                >
                  Choose
                </Button> */}
              </Paper>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={clsx(classes.product, classes.recommendedProduct)}
                elevation={1}
              >
                {/* <img
                  alt="Product"
                  className={classes.productImage}
                  src="/static/images/products/product_premium--outlined.svg"
                /> */}
                <Typography
                  component="h3"
                  gutterBottom
                  variant="overline"
                  color="inherit"
                >
                 Upcoming
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                    color="inherit"
                  >
                    $29
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                    color="inherit"
                  >
                    /month
                  </Typography>
                </div>
                <Typography
                  variant="overline"
                  color="inherit"
                >
                  Motivational Session
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Typography
                  variant="body2"
                  color="inherit"
                >
                  20 videos/month
                  <br />
                  10 lectures
                  <br />
                  Analytics dashboard
                  <br />
                  Email alerts
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                {/* <Button
                  variant="contained"
                  fullWidth
                  className={classes.chooseButton}
                >
                  Choose
                </Button> */}
              </Paper>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <Paper
                className={classes.product}
                elevation={1}
              >
                {/* <img
                  alt="Product"
                  className={classes.productImage}
                  src="/static/images/products/product_extended.svg"
                /> */}
                <Typography
                  component="h3"
                  gutterBottom
                  variant="overline"
                  color="textSecondary"
                >
                History
                </Typography>
                <div>
                  <Typography
                    component="span"
                    display="inline"
                    variant="h3"
                    color="textPrimary"
                  >
                    $259
                  </Typography>
                  <Typography
                    component="span"
                    display="inline"
                    variant="subtitle2"
                    color="textSecondary"
                  >
                    /month
                  </Typography>
                </div>
                <Typography
                  variant="overline"
                  color="textSecondary"
                >
                  Unlimited
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                <Typography
                  variant="body2"
                  color="textPrimary"
                >
                  All from above
                  <br />
                  Unlimited 24/7 support
                  <br />
                  lectures
                  <br />
                  Email Alerts
                </Typography>
                <Box my={2}>
                  <Divider />
                </Box>
                {/* <Button
                  variant="contained"
                  fullWidth
                  className={classes.chooseButton}
                >
                  Choose
                </Button> */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default PricingView;
