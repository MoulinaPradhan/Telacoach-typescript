import type { FC } from 'react';
import React from 'react';
import { Box, Button, Container,Grid, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import type { Theme } from 'src/theme';
import {Link as RouterLink} from 'react-router-dom';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import Step1 from './Step1';
import Step3 from './Step3';
import Step4 from './Step4';
import Step0 from './Step0';
import Security from './Security';
import UserDetails from './UserDetails';
import { UserType } from '../../../types/user';
import './stepper.css';
import Logo from 'src/components/Logo';


const methodIcons = {
  'Auth0': '/static/images/auth0.svg',
  'FirebaseAuth': '/static/images/firebase.svg',
  'JWT': '/static/images/jwt.svg'
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

function getSteps() {
  return ['Details', 'Billing', 'Address','Professional ','Password'];
}

function getStepContent(step: number) {
  switch (step) {
    // case 0:
    //   return <Step0 />;
    case 0:
      return <Step1 />;
    case 1:
      return <UserDetails />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    case 4:
      return <Security />;
    default:
      return 'Unknown step';
  }
}

const Register: FC = () => {
  const classes = useStyles();
  const { method } = useAuth() as any;
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();
  const { user } = useAuth();
  const { register } = useAuth() as any;

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error('You can\'t skip a step that isn\'t optional.');
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Grid      md={12} >
    <Page
      className={classes.root}
      title="Register"
 
    >

      <Container maxWidth="md">
        <div className={classes.root}>

        <Box
          display="flex"
          justifyContent="center"
          pt={2}
        >
          <RouterLink to="/">
            <Logo style={{height: '100px'}} />
          </RouterLink>
        </Box>
      <Box
        flexGrow={1}
        mt={8} ml={10}>
         <Typography
          variant="h2"
          color="primary"
          >Register</Typography><br/>
         
      <Box>
        <Grid md={12} sm={12} xs={12}>
      <Stepper activeStep={activeStep} style={{display: 'visible'}} className="stepper">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </Grid>
      
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Grid md={12} sm={4} xs={4}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
                      {activeStep === steps.length - 1 ? <Button
                        variant="contained"
                        color="primary"
                        onClick={async () => {
                          try {
                            await register('values.email', 'Katarina Smith', 'values.password', UserType.coach);
                          } catch (err) {
                            console.error(err);
                          }
                        }
                        }
                        className={classes.button}
                      >Finish</Button> : <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >Next</Button>}
                    </div>
                    </Grid>
                  </div>
                  
                )}
              </div>
             
            </Box>
          </Box>
        </div>

      </Container>
    </Page>
    </Grid>
  );
};

export default Register;
