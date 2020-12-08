import React, {useState} from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  Grid,
  Card,
  CardContent,
  makeStyles,
  Avatar,
  CardActions,

} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import StepWizard from 'react-step-wizard';
import ProfileDetails from './ProfileDetails'
import useAuth from 'src/hooks/useAuth';
import gender from './gender';

interface JWTRegisterProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
    marginLeft:300
  }
}));

const Step1: FC<JWTRegisterProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { register } = useAuth() as any;
  const isMountedRef = useIsMountedRef();
  const { user } = useAuth();
  const [genders, setGender] = React.useState();
  const[image,setImage]= React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>,value) => {
    setGender(value.value );
    console.log(genders);
     };
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
    setImage(URL.createObjectURL(img));
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        name: Yup.string().max(255).required('Name is required'),
        password: Yup.string().min(7).max(255).required('Password is required'),
        policy: Yup.boolean().oneOf([true], 'This field must be checked')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          await register(values.email, values.name, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
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
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          noValidate
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
     <Card
            className={clsx(classes.root, className)}
            {...rest}
          >
 <CardContent>
    <Grid
     container
    spacing={4}
>
<Grid item md={6} sm={6}xs={6}>
<CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Avatar
         className={classes.avatar}
            src={image}
          />
        </Box>
      </CardContent>
      </Grid>
      <Box
       mt={18}
      style={{marginLeft: '-57px'}}
      display="flex"
      alignItems="center"
     
      >

<Button
  variant="text"
  component="label"
  dir="ltr"
  onChange={onImageChange}>
 Add Picture
  <input
    type="file"
    style={{ display: "none" }}
  />

</Button>
        </Box>
      {/* <CardActions>
      <Grid item md={12}>
        <Button
          fullWidth
          variant="text"
        >
          Remove picture
        </Button>
        </Grid>
      </CardActions> */}
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="Username"
            margin="none"
            name="name"
            onBlur={handleBlur}
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="First Name"
            margin="none"
            name="name"
            onBlur={handleBlur}
            
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={6} sm={6} xs={6}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="Last Name"
            margin="none"
            name="name"
            onBlur={handleBlur}
            
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
           <TextField
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="Email Address"
            margin="none"
            name="email"
            onBlur={handleBlur}
            
            type="email"
            value={values.email}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
           <TextField
            // error={Boolean(touched.email && errors.email)}
            fullWidth
            // helperText={touched.email && errors.email}
            label="Phone Number"
            margin="none"
            name="email"
            onBlur={handleBlur}
            
            type="text"
            value={values.email}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Password"
            margin="none"
            name="password"
            onBlur={handleBlur}
            
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
          <Autocomplete
                    getOptionLabel={(option) => option.text}
                    options={gender}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        label="Gender"
                        name="gender"
                        
                        variant="outlined"
                        {...params}
                      />
                    )}
                  />
                  {genders === 'Cu' ?( <TextField style={{marginTop: '10px'}}
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Custom Gender"
            
            name="custom"
            onBlur={handleBlur}
            
            type="password"
            value={values.password}
            variant="outlined"
          />) : (
            <TextField style={{display: 'none'}}
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Password"
            name="password"
            onBlur={handleBlur}
            
            type="text"
            value={values.password}
            variant="outlined"
          />
            )}
          </Grid>
          {/* <Grid item md={12}>
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Coach Category"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid> */}
          <Grid item md={12} sm={12} xs={12}>
          <Box
            alignItems="center"
            display="flex"
            mt={2}
            ml={-1}
          >
            <Checkbox
              checked={values.policy}
              name="policy"
              onChange={handleChange}
            />
            <Typography
              variant="body2"
              color="textSecondary"
            >
              I have read the
              {' '}
              <Link
                component="a"
                color="primary"
                href="/termsandcondition"
              >
                Terms and Conditions
              </Link>
            </Typography>
          </Box>
          </Grid>
          {Boolean(touched.policy && errors.policy) && (
            <FormHelperText error>
              {errors.policy}
            </FormHelperText>
          )}
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )}
          {/* <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Box> */}
          </Grid>
         </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};

Step1.propTypes = {
  className: PropTypes.string
};

export default Step1;
