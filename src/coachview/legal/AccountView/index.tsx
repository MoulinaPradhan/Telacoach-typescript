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
import General from './General';
import Subscription from './Subscription';
import Notifications from './Notifications';
import Security from './Security';
import ProfilePhoto from './ProfilePhoto';
import Professional from './Professional';
import ProfileView from './ProfileView';
import PricingView from './PricingView';
import InvoiceListView from './InvoiceListView';
import ProjectCreateView from './ProjectCreateView'
import HelpView from './HelpView'
import Faq from './Faq'
import Report from './Report'
import AboutView from './AboutView'
import Privacy from './Privacy'




const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const AccountView: FC = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState<string>('terms');

  const tabs = [
  
    { value: 'privacy', label: 'Privacy' },
    { value: 'terms', label: 'Terms & Conditions' },
   
   
   
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Page
      className={classes.root}
      title="Settings"
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
          {currentTab === 'privacy' && <Privacy />}
          {currentTab === 'terms' && <AboutView />}
          
          
        </Box>
      </Container>
    </Page>
  );
};

export default AccountView;
