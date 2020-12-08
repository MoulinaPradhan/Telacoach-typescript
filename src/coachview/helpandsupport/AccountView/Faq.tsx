import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Tabs,
    Card,
    CardHeader,
    CardContent,
  } from '@material-ui/core';
  import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
  import Page from 'src/components/Page';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
interface SecurityProps {
    className?: string;
  }
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      flexBasis: '100%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
    //   color: theme.palette.text.primary,
      color:theme.palette.primary.dark
    },
  }),
);

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Page
    className={classes.root}
    title="FAQ"
  > <Card
  className={clsx(classes.root)}
  
>
  <CardHeader title="FAQ" />
  <CardContent>
  <div className="container">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>How long in advance can clients book a session ?</Typography>
          
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
             Upto two weeks in advance.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Can clients purchase a subscription for multiple sessions ?</Typography>
            {/* <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
              No. 
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Can I cancel my plan? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
              Yes. But you will be charged the full amount for the session if the coach has already booked the session.
          </Typography>
          </AccordionDetails>
        </Accordion>
        {/* */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>How do I change my password? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
             If you are a client, go to Help & Settings&gt;Account Setting&gt;Change my password.<br/>
             If you are a coach, go to My Profile&gt;ProfileSetting&gt;Change Password.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>How do I update my profile? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
             If you are a client, go to: Help & Settings&gt;Account Settings&gt; Personal Details.<br/>
             If you are a coach, go to My Profile&gt; My Profile Setting&gt;Personal Details or Professional Details.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>How can a client change their contact preference?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
             Go to Help and Settings&gt;Personal Details
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>How do I contact support?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Send an email to Sales@Telacoach.com or support@Telacoach.com
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>How do I receive my invoice?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
             You will recieve an invoice by email after the coaching session.
          </Typography>
          </AccordionDetails>
        </Accordion>
        {/*demo */}
        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.heading}>How can a coach remove a coaching category?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Go to My Profile&gt;My Profile Settings&gt;Personal Details. Tap on the scroll icon next to the

coach categories and then remove the

category that you no longer want.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography className={classes.heading}>Does Telacoach accept insurance payments?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            We do not currently accept insurance payments but we plan to do so in 2021.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11bh-content"
            id="panel11bh-header"
          >
            <Typography className={classes.heading}>Will the coach launch the session by contacting me or do I need to reach out to the coach?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            The coach will launch the session at the time

scheduled for the session. You do not need

to contact the coach. If you have a question prior to the session, you can message the coach via the Messages section of the app.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12bh-content"
            id="panel12bh-header"
          >
            <Typography className={classes.heading}>How can the coach launch the coaching session?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            From the menu screen, go to Connect with Client.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13bh-content"
            id="panel13bh-header"
          >
            <Typography className={classes.heading}>How can coaches view the payments received?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Go to My Payments&gt;Detailed.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel14bh-content"
            id="panel14bh-header"
          >
            <Typography className={classes.heading}>How can coaches view upcoming coaching sessions?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Go to My Session History&gt;Upcoming
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel15bh-content"
            id="panel15bh-header"
          >
            <Typography className={classes.heading}>How can coaches view past coaching sessions?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Go to My Session History&gt;Past Sessions
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel16bh-content"
            id="panel16bh-header"
          >
            <Typography className={classes.heading}>How can coaches add their bank account information?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Go to My Payments and then Update Bank Information.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel17bh-content"
            id="panel17bh-header"
          >
            <Typography className={classes.heading}>Will coaches receive a Form 1099?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            A Form 1099 will be emailed to coaches at the end of the tax year if they received at least $600 in income during the tax year.

          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel18bh-content"
            id="panel18bh-header"
          >
            <Typography className={classes.heading}>How can coaches change the billing plan that they selected to a different plan?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Send a request to sales@Telacoach.com Please note that we will need to verify your

eligibility for the new billing plan.
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel19bh-content"
            id="panel19bh-header"
          >
            <Typography className={classes.heading}>How can I close my account?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Send a request to sales@Telacoach.com
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel20bh-content"
            id="panel20bh-header"
          >
            <Typography className={classes.heading}>Does Telacoach offer coaches a Calendar for managing their bookings?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Yes. Go to Calendar from the menu screen. Tap on the the specific time period on any date that you do not wish to take an appointment. To block out the entire day, tap on the date and then tap on ALL DAY.
          </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel21bh-content"
            id="panel21bh-header"
          >
            <Typography className={classes.heading}>How can I change my profile photo as a coach?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
           
Go to My Profile&gt;My Profile Settings Change My Profile Photo
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel22bh-content"
            id="panel22bh-header"
          >
            <Typography className={classes.heading}>How can I view my profile as a coach?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            A

Go to My Profile&gt;My Profile Setting View My Profile
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel23bh-content"
            id="panel23bh-header"
          >
            <Typography className={classes.heading}>How can I add a bank account whose number is not 10 12 or 13 digits?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            If your bank account number is less or more than the standard 10 12 or 13 digits please add zero or zeros at the beginning as needed,

          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel24bh-content"
            id="panel24bh-header"
          >
            <Typography className={classes.heading}>Can clients book coaches on the same day?</Typography>
            {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography  color="textSecondary">
            Yes. Clients can book a coach within 3 hours

of the same day. For example, a client can book a coach for 12 noon at 9 a.m. of the same day.
          </Typography>
          </AccordionDetails>
        </Accordion>

    </div>
    </CardContent>
    </Card>
    </Page>
  );
}