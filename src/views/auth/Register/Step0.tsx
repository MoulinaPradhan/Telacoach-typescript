import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {Link as RouterLink} from 'react-router-dom';
import Page from 'src/components/Page';
import type { Theme } from 'src/theme';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  Grid,
  Container,
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import StepWizard from 'react-step-wizard';
import './stepper.css';
import Logo from 'src/components/Logo';
import Header from './Header'
interface JWTRegisterProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark ,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
}));

const Step0: FC<JWTRegisterProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { register } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

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
        handleChange,
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
 
 <Page
      className={classes.root}
      title="Register"
    >
   
   <Container maxWidth="md">
   <div>
  
          <Header/> <br/><br/>
        
           
   
    <Grid
     container
    spacing={4}
    style={{backgroundColor: 'white'}}
    
>

  <Typography
  variant="body1"
  color="textPrimary"
  style={{margin: '20px 20px 20px 20px', textAlign: 'center',}}
  
  >
    <Box
          style={{backgroundColor: 'white'}}
          display="flex"
          justifyContent="center"
          pb={2}
        >
          <RouterLink to="/">
            <Logo style={{height: '100px'}} />
          </RouterLink>
        </Box>
  Telacoach is a revolutionary app which connects coaches with clients all over the USA.
  Clients can connect with different types of coaches via video chat, phone chat, or text chat.
  </Typography>
  
{/* <Grid item md={12}>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            helperText={touched.name && errors.name}
            label="Username"
            margin="normal"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={6}>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            helperText={touched.name && errors.name}
            label="First Name"
            margin="normal"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={6}>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            helperText={touched.name && errors.name}
            label="Last Name"
            margin="normal"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12}>
           <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12}>
           <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Phone Number"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="number"
            value={values.email}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12}>
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12}>
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Gender"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12}>
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
          
          <Grid item md={6}>
          <Box
            alignItems="center"
            display="flex"
            mt={4}
            
          >
          <Button
              color="secondary"
              fullWidth
              size="large"
              variant="contained"
              to="/register/coach"
              component={RouterLink}
              
            >
              Sign Up as Coach
            </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box alignItems="center"
            display="flex"
            mt={4}
      >
              
          <Button
              color="secondary"
              // disabled={isSubmitting}
              fullWidth
              size="large"
              // type="submit"
              variant="contained"
              to="/register/client"
              component={RouterLink}
            >
              Sign Up as Client
            </Button>
            </Box>
          </Grid>
          

          <Grid item md={12}>
          {/* <Box
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
                href="#"
                color="secondary"
              >
                Terms and Conditions
              </Link>
            </Typography>
          </Box> */}
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
          </div>
          </Container>
          
          </Page>
         </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};

Step0.propTypes = {
  className: PropTypes.string
};

export default Step0;
