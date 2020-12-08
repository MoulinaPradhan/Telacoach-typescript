import React, { useState } from 'react';
import type { FC, FormEvent } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Paper,
  FormHelperText,
  Typography,
  Radio,
  Button,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';

interface UserDetailsProps {
  className?: string;
  onNext?: () => void;
  onBack?: () => void;
}

const typeOptions = [
  {
    value: 'phone',
    title: 'Phone',
    description: 'I\'m looking for teamates to join in a personal project'
  },
  {
    value: 'video-chat',
    title: 'Video Chat',
    description: 'I\'m looking for freelancer or contractors to take care of my project'
  },
  {
    value: 'text',
    title: 'Text Chat',
    description: 'I\'m looking for freelancer or contractors to take care of my project'
  }
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  typeOption: {
    alignItems: 'flex-start',
    display: 'flex',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },
  stepButton: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const UserDetails: FC<UserDetailsProps> = ({
  className,
  onBack,
  onNext,
  ...rest
}) => {
  const classes = useStyles();
  const [type, setType] = useState<string>(typeOptions[1].value);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (newType: string): void => {
    setType(newType);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    
    try {
      setSubmitting(true);

      // NOTE: Make API request

      if (onNext) {
        onNext();
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Typography
        variant="h3"
        color="textPrimary"
      >
        Please select one option
      </Typography>
      <Box mt={2}>
        {/* <Typography
          variant="subtitle1"
          color="textSecondary"
        >
          Proin tincidunt lacus sed ante efficitur efficitur.
          Quisque aliquam fringilla velit sit amet euismod.
        </Typography> */}
      </Box>
      <Box mt={2}>
        {typeOptions.map((typeOption) => (
          <Paper
            className={classes.typeOption}
            elevation={type === typeOption.value ? 10 : 1}
            key={typeOption.value}
          >
            <Radio
              checked={type === typeOption.value}
              onClick={() => handleChange(typeOption.value)}
            />
            <Box ml={2}>
              <Typography
                gutterBottom
                variant="h5"
                color="textPrimary"
              >
                {typeOption.title}
              </Typography>
              {/* <Typography
                variant="body1"
                color="textPrimary"
              >
                {typeOption.description}
              </Typography> */}
            </Box>
          </Paper>
        ))}
      </Box>
      {error && (
        <Box mt={2}>
          <FormHelperText error>
            {error}
          </FormHelperText>
        </Box>
      )}
      {/* <Box
        mt={6}
        display="flex"
      >
        {onBack && (
          <Button
            onClick={onBack}
            size="large"
          >
            Previous
          </Button>
        )}
        <Box flexGrow={1} />
        <Button
          color="secondary"
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          size="large"
        >
          Next
        </Button>
      </Box> */}
    </form>
  );
};

UserDetails.propTypes = {
  className: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func
};

UserDetails.defaultProps = {
  onNext: () => {},
  onBack: () => {}
};

export default UserDetails;
