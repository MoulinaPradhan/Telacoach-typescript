import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    FormHelperText,
    Grid,
    TextField,
    makeStyles,
    ListSubheader,
    Typography,
    
  } from '@material-ui/core';
  import { useSnackbar } from 'notistack';
  import './login.css';
  import 'font-awesome/css/font-awesome.min.css';
  const { FaIcon, FaStack } = require('react-fa-icon');

interface SecurityProps {
    className?: string;
  }
  
  const useStyles = makeStyles(() => ({
    root: {}
  }));

  const Banner: FC<SecurityProps> = ({ className, ...rest }) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
  
    return (
      <div className="mu-header-featured-content login1">
      <h1><span>Life is hard. Everyone deserves a coach. But you shouldn’t have to be rich to afford one.</span></h1>
      <p />
      <div className="mu-app-download-area">
        <h3 style={{color: '#164285 !important', paddingBottom: 20}}>Download The App</h3>
        <a className="mu-apple-btn" href="https://www.apple.com/in/ios/app-store/" style={{marginBottom: '10px'}}><i className="fa fa-apple" /><span style={{color: 'black'}}>apple store</span></a>
        <a className="mu-google-btn" href="https://play.google.com/store?hl=en"><i className="fa fa-android" /><span style={{color: 'black'}}>google play</span></a>
        {/* <a class="mu-windows-btn" href="#"><i class="fa fa-windows"></i><span>windows store</span></a> */}
      </div>
    </div>
    
    )}

    Banner.propTypes = {
        className: PropTypes.string
      };
      
      export default Banner;