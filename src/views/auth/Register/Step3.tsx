import React from 'react';
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
  CardHeader,
  CardContent,
  makeStyles
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import StepWizard from 'react-step-wizard';
interface JWTRegisterProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Step3: FC<JWTRegisterProps> = ({ className, ...rest }) => {
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
    <Grid
     container
    spacing={4}
>
  <CardHeader title="We need to know where you are from"/>
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="Address"
            margin="none"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="City"
            margin="none"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />  
          </Grid>
           <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="State"
            margin="none"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.name && errors.name)}
            fullWidth
            // helperText={touched.name && errors.name}
            label="Zip Code"
            margin="none"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
        
          </Grid>
          <CardHeader title="Connect Social Media"/>
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Facebook URL"
            margin="none"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Twitter URL"
            margin="none"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="LinkedIn URL"
            margin="none"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>

          
          <Grid item md={12} sm={12} xs={12}>
          <TextField
            // error={Boolean(touched.password && errors.password)}
            fullWidth
            // helperText={touched.password && errors.password}
            label="Instagram URL"
            margin="none"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
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
         </CardContent>
          </Card>
        </form>
      )}
    </Formik>
  );
};

Step3.propTypes = {
  className: PropTypes.string
};

export default Step3;
