import React, {FC} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import type { Theme } from 'src/theme';
import type { Customer } from 'src/types/customer';

interface InvoicesProps {
  customer: Customer;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium
  }
}));

const Invoices: FC<InvoicesProps> = ({
  customer,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <CardHeader title="Invoices/Billing" /> */}
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
             Degree
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {/* {customer.creditCard} */}
                Associate's
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
            Qualification
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
               National board certified health and wellness coach, Diabetes preventions Coach, LIfestyle medicine coach, Certified personal trainer
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
            Certifications
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
               NBC-HWC, Lifestyle Medicine Coach, Diabetes Prevention Coach, Fitness and Sporys Nutrition Specialist, Certified personal trainer NASM
              </Typography>
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Unpaid/Due
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                1 ($12.00)
              </Typography>
            </TableCell>
          </TableRow> */}
          {/* <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Refunded
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                0 ($0.00)
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Gross Income
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                $1,200.00
              </Typography>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
      {/* <Box
        p={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Button startIcon={<AttachMoneyIcon />}>
          Create Invoice
        </Button>
        <Button startIcon={<ReceiptIcon />}>
          Resend Due Invoices
        </Button>
      </Box> */}
    </Card>
  );
};

Invoices.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  customer: PropTypes.object.isRequired
};

export default Invoices;
