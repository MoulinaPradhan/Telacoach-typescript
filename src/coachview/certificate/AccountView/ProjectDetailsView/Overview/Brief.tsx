import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Markdown from 'react-markdown/with-html';
import {
  Box,
  Chip,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import type { Project } from 'src/types/project';

interface BriefProps {
  className?: string;
  project: Project;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  heading:{
  fontSize:'0 rem',
  marginBottom:'8px',
  marginTop:'8px'
  },
  markdown: {
    fontFamily: theme.typography.fontFamily,
    '& p': {
      marginBottom: theme.spacing(2)
    }
  }
}));

const Brief: FC<BriefProps> = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        {/* <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="subtitle2"
              color="textSecondary"
            >
              Project Name
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
            >
              {project.title}
            </Typography>
            <Box mt={3}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
              >
                Tags
              </Typography>
              <Box mt={1}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    variant="outlined"
                    label={tag}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid> */}
        <Box mt={1} >
          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
         <h2> Certificate</h2> 
          </Typography>
          <Typography  color="textSecondary">
            <p>We are excited to announce the Certified Transformational Coach (CTC) certification.</p>
            <h3 className={classes.heading}>WHAT YOU WILL PROVIDE:</h3>
            <p>to be certified, coaches will submit a detailed portfolio of their professional experience and credentials, pay a processing fee, and respond to a questionnaire. The review process will take two weeks. Coaches who do not meet our certification criteria will have the processing fee refunded in full.</p>
            <h3 className={classes.heading}>WHAT WE WILL PROVIDE:</h3>
            <p>Once certified, coaches wil receive a framed certificate and a digital seal. They will be able to use the Certified Transformational Coach designation and the postnominal(CTC) on their bio, marketing materials, website, and social media pages. They will also be able to use the digital seal for social media, websites, and advertising.</p>
            <h3 className={classes.heading}>WHY?</h3>
            <p>Thousands of untrained and inexperienced "Coaches" are exploiting Americans daily, doling out harmful advice. The CTC certification will validate your ability to help potential clients achieve transformation.<br/></p>
<p>If you are interested in the CTC certification, send and email to,
sales@Telacoach.com</p>
          </Typography>
          {/* <Markdown
            source={project.description}
            className={classes.markdown}
          /> */}
        </Box>
      </CardContent>
    </Card>
  );
};

Brief.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  project: PropTypes.object.isRequired
};

export default Brief;
