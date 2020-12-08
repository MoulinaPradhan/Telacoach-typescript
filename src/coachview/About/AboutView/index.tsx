import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 20,
    paddingBottom: 80,
    marginBottom:50,
  },
  image: {
    maxWidth: '100%',
    width: 500,
    maxHeight: 500,
    height: 'auto'
  }
}));

const AboutView: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page
      className={classes.root}
      title="About Telacoach"
    >
<Container maxWidth="lg">
    
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
         About Telacoach
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
          
        >
          <br/>
         Telacoach is a revolutionary app which
              connects coaches with clients all over the USA.
              Clients can connect with different types of coaches via video chat,
              phone chat, or text chat. The coaches featured on the app are respected
              and accomplished professionals in their fields who have been carefully curated.
              In just a few minutes, users can have their own professional
              coach at their fingertips.
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Under development"
            className={classes.image}
            src="/static/images/Aboutlogo.png"
          />
        </Box>
       
      </Container>
    </Page>
  );
};

export default AboutView;
