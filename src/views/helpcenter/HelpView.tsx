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
      flexBasis: '70%',
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
    title="Help Center"
  > <Card
  className={clsx(classes.root)}
  
>
  <CardHeader title="Help Center" />
  <CardContent>
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>How Does Telacoach Work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  color="textSecondary">
          Telacoach connects people seeking personal improvement and development with coaches from all over the USA. You can connect with career and job coaches, executive coaches, financial coaches, motivational coaches, diet and fitness coaches, and other types of coaches.<br/>
          <br/>Users download the app from the App store, and register. Once registered, users can search for the type of coach they want, and book a session using a credit card.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Purpose</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  color="textSecondary">
          Telacoach connects clients with professionals in the helping professions. Clients can connect with executive coaches, career coaches, motivational coaches, spiritual coaches, diet and fitness coaches, and other coaches.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
    </CardContent>
    </Card>
    </Page>
  );
}