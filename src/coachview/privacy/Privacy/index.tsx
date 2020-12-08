import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 20,
    paddingBottom: 80,
    marginBottom:50,
  },
  image: {
    maxWidth: '100%',
    width: 500,
    maxHeight: 500,
    height: 'auto'
  }
}));

const Privacy: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page
      className={classes.root}
      title="Terms & Conditions"
    >
<Container maxWidth="lg">
    
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
         About our Privacy Policy
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
          
        >
          <br/>
          <li> This Privacy Policy is intended to inform you about how we treat Personal Information that we process about you. If you do not agree to any part of this Privacy Policy, then we cannot provide the Platform or Services to you, and you should stop accessing the Platform and deactivate your TelaCoachAccount.TelaCoach (“TelaCoach,” “we,” “our,” and/or “us”) values the privacy of individuals that use our application, websites, and related services (collectively, the “TelaCoach Platform ”). This privacy policy (the “Privacy Policy”) explains how we collect, use, and share information from TelaCoach users (“Users”). In addition to our Privacy Policy, your use of TelaCoach is also subject to our Terms of Service</li>
                                    <h4 className="PrivacyHeadingsWrap">Definitions</h4>
                                    <li> Where the definition of a term does not appear in this Privacy Policy (such as “Listing”, “Accommodation”, “Content,” “Services” etc.), it shall be given its definition as outlined in our Terms of Service. Affiliates” means companies related by common ownership or control. They can be financial and non-financial companies. “Aggregated Information” means information about all of our users or specific groups or categories of users that we combine together so that it no longer identifies or references an individual user. “Data Controller” means TelaCoach, the company responsible for the use and processing of Personal Information. “Third Parties” means companies or persons not related by common ownership or control (i.e. non-affiliates) or other unrelated individuals. Third Parties can be financial and non-financial companies, or persons other than you and TelaCoach. “Personal Information” means information (which may include sensitive information) relating to a living individual who is or can be identified either from that information or from that information in conjunction with other information that is in, or is likely to come into, the possession of the Data Controller.</li>
                                    <h4 className="PrivacyHeadingsWrap">Information We Collect<br />
A. Information You Provide to Us</h4>
                                    <li> Registration Information. When you sign up for a TelaCoach account, you give us your name, email address, and phone number. If you decide to sign up for TelaCoach using your Facebook account, we will also get basic information from your Facebook profile like your name, gender, profile photo, and Facebook friends. </li>

                                    <li> User Profile Information. When you join the TelaCoach community, you can create a TelaCoach Profile to share information about yourself. Filling out a profile is optional. Your name and profile photo are always a part of your Profile.</li>

                                    <li> Payment Method. When you add a credit card or payment method to your TelaCoach account, a third party that handles payments for us will receive your card information.</li>

                                    <li> Communications. When you contact us, we may require additional information from you. For example, when you contact our Customer Support Team, we will receive your name, email address, phone number, the contents of a message or attachments that you sent to us, and other information that you choose to provide.</li>

                                    <li> Payment Information. TelaCoach may store information about your bank routing numbers, credit card information, tax information, and any other payment information.</li>

                                    <h4 className="PrivacyHeadingsWrap">B. Information We Collect When You Use the TelaCoach Platform</h4>

                                    <li> Location Information. TelaCoach may use GPS and Google Nearby technology to determine your location. When you open TelaCoach on your mobile device, we will receive your location. We may also collect the exact location of your device when the app is running in the foreground or background. Your location information is necessary for matching users of the app. If you give us permission through your device settings or TelaCoach app, we may collect your location while the app is off to identify service updates in your area.</li>

                                    <li> Device Information. TelaCoach receives information from Users’ devices, including IP address, web browser type, mobile operating system version, phone carrier and manufacturer, application installations, device identifiers, mobile advertising identifiers, push notification tokens, and, if you register with your Facebook account, your Facebook identifier.</li>

                                    <li> Usage Information. To help us understand how you use the TelaCoach Platform and to help us improve it, we automatically receive information about your interactions with the TelaCoach Platform, like the pages or other content you view, your actions within the TelaCoach app, and the dates and times of your visits.</li>

                                    <li> Address Book Contacts. If you allow TelaCoach to access the address book on your device through the permission system used by your mobile platform, we may access and store names and contact information from your address book in order to process invitations and for other purposes described in this privacy policy or at the time of consent or collection.</li>

                                    <li> Information from Cookies and Similar Technologies. We collect information through the use of “cookies”, tracking pixels, and similar technologies to understand how you navigate through the TelaCoach Platform and interact with TelaCoach advertisements, to learn what content is popular, and to save your preferences. Cookies are small text files that web servers place on your device; they are designed to store basic information and to help websites and apps recognize your browser. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be accessed every time you use the TelaCoach Platform. You should consult phone’s web browser(s) to modify your cookie settings. Please note that if you delete or choose not to accept cookies from us, you may be missing out on certain features of the TelaCoach Platform. You do have the ability to delete or not accept cookies from TelaCoach.</li>

                                    <h4 className="PrivacyHeadingsWrap">C. Information We Collect from Third Parties</h4>
                                    <li>Third Party Services. If you choose to register for TelaCoach or otherwise link your TelaCoach account with a third party’s service (such as Facebook), we may receive the same type of information we collect from you (described above) directly from those services.</li>

                                    <li>Third Party Partners. We may receive additional information about you, such as demographic data, payment information, or fraud detection information, from third party partners and combine it with other information that we have about you.</li>
                                    <h4 className="PrivacyHeadingsWrap">How We Use the Information We Collect</h4>
                                    <li> We use the information we collect from all Users to: </li>

                                    <li> Connect users of Telacoach</li>


                                    <li> Provide Customer Support</li>

                                    <li> Analyze usage of the TelaCoach Service</li>

                                    <li> Communicate with you, either directly or through one of our partners, including for marketing and promotional purposes;</li>

                                    <li> Personalize the TelaCoach experience for you and your friends and contacts;</li>

                                    <li> Send you text messages and push notifications;</li>

                                    <li> Facilitate transactions and payments;</li>

                                    <li> Find and prevent fraud;</li>

                                    <li> Respond to trust and safety issues that may arise, including incidents and disputes and requests from government authorities.</li>
                                    <li> Collect for the following purposes related to driving on the TelaCoach Platform:</li>

                                    <li> Send emails and text messages to users who have installed the Application</li>

                                    <h4 className="PrivacyHeadingsWrap">How We Share the Information We Collect<br />
                                    A. Sharing Between Users</h4>
                                    <li> Sharing between Users: Users are able to see basic Profile information about each other, such as names, photo, and geographical location. Users who connect their TelaCoach accounts to Facebook will also be able to see their mutual Facebook friends. Although we connect Users, we do not share your actual phone number or other contact information with other Users. B. Sharing Between TelaCoach and Third Parties</li>

                                    <li> API and Integration Partners. When you connect to the TelaCoach Platform through an integration with a third party service, we may share information about your use of the TelaCoach Platform with that third party. We may share your information with our third party partners in order to receive additional information about you. We may also share your information with third party partners to create offers that may interest to you.</li>

                                    <li> Service Providers. We work with third party service providers to perform services on our behalf, and we may share your information with such service providers to help us provide the TelaCoach Platform, including all of the things described above.</li>
                                    <li> Other Sharing. We may share your information with third parties in the following cases:</li>

                                    <li> If requested by a government authority as part of a legal investigation.</li>

                                    <li> While negotiating or in relation to a change of corporate control such as a restructuring, merger or sale of our assets;</li>

                                    <li> With law enforcement officials, government authorities, or third parties if we think doing so is necessary to protect the rights, property, or safety of the TelaCoach community, TelaCoach, or the public.</li>

                                    <li> To provide information about the use of the TelaCoach Platform to potential business partners in aggregated or de-identified form that can’t reasonably be used to identify you; </li>

                                    <li> Whenever you consent to the sharing.</li>
                                    <h4 className="PrivacyHeadingsWrap">STATE LAWS</h4>
                                    <li>For California & Vermont residents: TelaCoach Payments will not share information it collects about you with Affiliates or Third Parties, except as required or permitted by your state’s law.</li>
                                    <h4 className="PrivacyHeadingsWrap">Your Choices</h4>
                                    <li> Email Subscriptions. You can always unsubscribe from our commercial or promotional emails but we will still send you transactional and other emails about your account use of the TelaCoach Platform.</li>

                                    <li> Text Messages. You can opt out of receiving commercial or promotional text messages by texting the word STOP in response to text messages. You may also opt out of receiving all texts from TelaCoach by texting the word STOPALL from the mobile device receiving the messages, however, opting out of receiving all texts may impact your use of the TelaCoach Platform. To re- enable texts you can text START in response to an unsubscribe confirmation SMS.</li>

                                    <li> Push Notifications. You can opt out of receiving push notifications through your device settings. Please note that opting out of receiving push notifications may impact your use of the TelaCoach Platform.</li>

                                    <li> Profile Information. While your name will always be shared with users of the Application, you can delete any additional information that you added to your Profile at any time if you don’t want users of the Application to see it. Users will always be able to see the names and profiles of other users. Users can be searched by name, email address or user name.</li>

                                    <li> Location Information. While you can prevent your device from sharing location information at any time through your Device’s operating system settings, identifying the location of users of Telacoach is crucial to the functionality of the TelaCoach Platform. Without this feature, it may be difficult to provide our services to you.</li>

                                    <li> Facebook Friends. You can control whether to enable or disable the Facebook mutual friends feature through your profile settings.</li>

                                    <li> Editing and Accessing Your Information. You can review and edit certain account information by logging in to your account settings and profile. If would like to terminate your TelaCoach account, please notify us through our Help Center. If you choose to terminate your account, we will deactivate it for you but may retain information from your account for a certain period of time and disclose it in a manner consistent with our practices under this Privacy Policy for accounts that are not closed. We also may retain information from your account to collect any fees owed, resolve disputes, troubleshoot problems, analyze usage of the TelaCoach Platform, assist with any investigations, prevent fraud, enforce our Terms of Service, or take other actions as required or permitted by law.</li>
                                    <h4 className="PrivacyHeadingsWrap">Others</h4>
                                    <li> Data Protection. We strive to implement and update administrative, technical, and physical security measures to help protect your Personal Information against unauthorized access, destruction or alteration. However, no method of transmission over the Internet, and no method of storing electronic information, can be 100% secure. So, we cannot guarantee the security of your transmissions to us and of your Personal Information that we store.</li>

                                    <li> Children’s Privacy. TelaCoach is not meant to be used by children or aimed at children. We do not intentionally collect personal information from children under 13. If we find out that a child under 13 has given us personal information, we will take steps to delete that information. If you believe that a child under the age of 13 has given us personal information, please contact us at our Help Center.</li>

                                    <li> Contact Information. Feel free to contact us at any time with any questions or comments about this Privacy Policy, your personal information, our use and sharing practices, or your consent choices by contacting us at support@Telacoach.com.</li>

                                    <li> Changes to Our Privacy Policy. We may change how we collect and then use Personal Information at any time and without prior notice, at our sole discretion. We may change this Privacy Policy at any time. If we make any material changes, we will let you know through the TelaCoach Platform, by email, or other communication. We encourage you to read this Privacy Policy periodically to stay up-to-date about our privacy practices. As long as you use the TelaCoach Platform, you are agreeing to this Privacy Policy and any updates we make to it.</li>
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Under development"
            className={classes.image}
            src="/static/images/Aboutlogo.png"
          />
        </Box>
       
      </Container>
    </Page>
  );
};

export default Privacy;
