import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  Switch,
  Link,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import type { User } from 'src/types/user';
import wait from 'src/utils/wait';
import countries from './countries';
import gender from './gender';
import coachcategory from './coachcategory';
import timezone from './timezone';
import state from  './state' 
import { Link as RouterLink } from 'react-router-dom';




interface GeneralSettingsProps {
  className?: string;
  user: User;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 1000,
    },
 
  
}));

const GeneralSettings: FC<GeneralSettingsProps> = ({ className, user, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      enableReinitialize
      initialValues={{
        canHire: user.canHire || false,
        city: user.city || '',
        country: user.country || '',
        email: user.email || '',
        isPublic: user.isPublic || false,
        name: user.name || '',
        firstName:user.firstName||'',
        lastName:user.lastName||'',
        gender: user.gender || '',
        phone: user.phone || '',
        state: user.state || '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        canHire: Yup.bool(),
        city: Yup.string().max(255),
        country: Yup.string().max(255),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        isPublic: Yup.bool(),
        name: Yup.string().max(255).required('Name is required'),
        firstName:Yup.string().max(255).required('First Name is required'),
        lastName:Yup.string().max(255).required('Last Name is required'),
        gender: Yup.string().max(255),
        phone: Yup.string(),
        state: Yup.string()
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // NOTE: Make API request
          await wait(200);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Profile updated', {
            variant: 'success'
          });
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Card
            className={clsx(classes.root, className)}
            {...rest}
          >
            <CardHeader title="Your Current Location is" />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={4}
              >

                        

            <Grid
                  item
                  md={12}
                  xs={12}
                >
                     
                  <Autocomplete
                    getOptionLabel={(option) => option.text}
                    options={state}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        label="Select state"
                        name="state"
                        onChange={handleChange}
                        variant="outlined"
                        {...params}
                      />
                    )}
                  />
                </Grid>
                <CardHeader title="What time is good for you?"/>
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <Autocomplete
                    getOptionLabel={(option) => option.text}
                    options={timezone}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        label="Select your timezone"
                        name="timezone"
                        onChange={handleChange}
                        variant="outlined"
                        {...params}
                      />
                    )}
                  />
                </Grid>
                
                {/* <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <Autocomplete
                    getOptionLabel={(option) => option.text}
                    options={coachcategory}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        label="Select Date"
                        name="Coach Category"
                        onChange={handleChange}
                        variant="outlined"
                        {...params}
                      />
                    )}
                  />
                </Grid> */}

                <Grid
                  item
                  md={12}
                  xs={12}
                >
                    <TextField
        id="date"
        label="Select date"
        type="date"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
     <Grid
       item
         md={12}
           xs={12}
            >
      <TextField
        id="time"
        label="Select time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </Grid>
                 
               
              
               
              </Grid>
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="flex-end"
            >
              
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                component={RouterLink}
                to="/client/plans"
              >
                Book
              </Button>
             
            </Box>
          
          </Card>
        </form>
      )}
    </Formik>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default GeneralSettings;
