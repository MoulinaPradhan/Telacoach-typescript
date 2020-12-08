import React, { useState } from 'react';
import type { FC, ChangeEvent } from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import type { Theme } from 'src/theme';
import Header from './Header';
import Upcoming from './Upcoming';
import Pending from './Pending';
import History from './History';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  }));
  
  const SessionView: FC = () => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState<string>('Pending');
  
    const tabs = [
      { value: 'Pending', label: 'Pending' },
      { value: 'Upcoming', label: 'Upcoming' },
      { value: 'History', label: 'History' },
      
      // { value: 'profile', label: 'Change My Profile Photo' }
    ];
  
    const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
      setCurrentTab(value);
    };
  
    return (
      <Page
        className={classes.root}
        title="Personal Details"
      >
        <Container maxWidth="lg">
          <Header />
          <Box mt={3}>
            <Tabs
              onChange={handleTabsChange}
              scrollButtons="auto"
              value={currentTab}
              variant="scrollable"
              textColor="secondary"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box mt={3}>
          {currentTab === 'Pending' && <Pending/>}
            {currentTab === 'Upcoming' && <Upcoming/>}
            {currentTab === 'History' && <History />}
           
          </Box>
        </Container>
      </Page>
    );
  };
  
  export default SessionView;
  