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

const AboutView: FC = () => {
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
         Terms & Conditions
        </Typography>
        <Typography
          align="left"
          variant="subtitle2"
          color="textSecondary"
          
        >
          <br/>
          <p>
                Personal Data and Browser Data THE SITE WILL BE COLLECTING AND
                TRANSMITTING PERSONAL, MEDICAL, FINANCIAL, AND HEALTH-RELATED
                INFORMATION ABOUT YOU. BY USING THE SITE, YOU AGREE THAT WE CAN
                COLLECT AND USE YOUR PERSONAL AND OTHER INFORMATION AS DESCRIBED
                IN THIS SITE  POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT
                USE THE SITE. <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  Important Definitions
              </Typography>
                
                <br />
                • When we use the term "Personal Information" in this 
                Policy, we mean information about you that is personally
                identifiable to you, such as your contact information (e.g.,
                name, address, email address, or telephone number), personally
                identifiable health or medical information ("Health
                Information"), and any other non-public information that is
                associated with such information. When we use the term
                "De-Identified Information", we mean information that is neither
                used nor intended to be used to personally identify an
                individual. Lastly, when we use the term "Cookies", we mean the
                small pieces of information that a Site sends to your browser
                while you are viewing a website.
                <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  Children under age 18
              </Typography>
                
                <br />
                • We do not knowingly allow individuals under the age 18 to
                create Accounts that allow access to our Site.
                <br />
                <br />
                • The Personal Data and Browser Data (hereinafter collectively
                referred to as "Data"), automatically gathered from the app and
                our website (hereinafter referred to as "the Site" or "the
                App"), by means of automated systems or freely entered by the
                User of this Site.
                <br />
                <br />
                • Our user's  is extremely important to us. Our 
                Policy provides important disclosures about your use of
                TelaCoach and how your information is collected and used. <br />
                <br />
                • We receive a number of different types of information about
                you, including:
                <br />
                <br />
                ◦ The information that we ask for when you sign up for the app,
                as well as the information you choose to share.
                <br />
                <br />
                ◦ Required information such as your name, email address,
                birthday, and gender. We use return email addresses to answer
                the email we receive. <br />
                <br />
                We do not use such addresses for any other purpose and do not
                share with outside parties.
                <br />
                <br />
                ◦ Usernames and User IDs, which are used to identify you on
                TelaCoach.A User ID is a string of numbers and a username.
                <br />
                <br />
                ◦ "Public Information" which means the information you choose to
                make public, as well as information that is always publicly
                available.
                <br />
                <br />
                • Information posted to a group chat or moderated session and
                information kept within a one on one session.
                <br />
                <br />
                • “Contact Information” is personal information and or
                family/friend/relation that TelaCoach stores confidentially for
                your Coach to access in case of an emergency or mental health
                crisis. <br />
                <br />
                • Parties processing the data TelaCoachis a "DBA" used by Kind
                Payments Inc, which manages the app and site and maintains the
                Data. <br />
                <br />
                • We will keep your information confidential except where
                disclosure is required or permitted by law (for example to
                government bodies and law enforcement agencies or during an
                emergency circumstance as judged by your Coach working with
                local authorities). Generally, we will only use your information
                within our company. However, sometimes we use third parties to
                process your information (for example as credit card payment
                providers). We will require these third parties to comply
                strictly with its instructions and we will require that they not
                use your personal information for their own business purposes.{" "}
                <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  The Uses of the Data Collected by TelaCoach
              </Typography>
                
                
                <br />
                • TelaCoach uses non-identifying and aggregate information to
                better design our Web site and to use in research and trend
                analysis. For example, we may tell an advertiser that X number
                of individuals visited a certain area on our Web site, or that Y
                number of men and Z number of women filled out a site survey or
                form, but we would not disclose anything that could be used to
                identify those individuals. We only provide data to our
                partners, if any, after we have removed your name and any other
                personally identifying information from it, or have combined it
                with other people's data in a way that it no longer personally
                identifies you. <br />
                <br />
                • TelaCoach uses non-identifying (De-Identified or “Safe Harbor”
                form) and aggregate information about responses to the clinical
                outcome assessments (personal assessments), and the frequency of
                the utilization of the TelaCoach service. These efforts enhance
                program evaluation. <br />
                <br />
                • The anonymous and aggregated data also may be published
                through various media platforms/academic journals. No personal
                identifying information will be tied to the results, and
                TelaCoach will not share anything that could be used to identify
                your account or your private information. <br />
                <br />
                • From time to time, we may use customer information for new,
                unanticipated uses not previously disclosed in our 
                notice. If our information practices change at some time in the
                future we will contact you before we use your data for these new
                purposes to notify you of the policy change and to provide you
                with the ability to opt out of these new uses. <br />
                <br />
                • TelaCoach stores data only for as long as it is necessary to
                provide products and services to you and others, including those
                described above and for legal protections or as required by
                applicable laws and regulations. <br />
                <br />
                • TelaCoach may enable access to public information that has
                been shared through our services. <br />
                <br />
                • TelaCoach may allow service providers to access information so
                they can help us provide services. <br />
                <br />
                • We may also disclose your information to our subsidiaries and
                affiliates; <br />
                <br />
                • To contractors, service providers and other third parties we
                use to support our business and who are bound by contractual
                obligations to keep personal information confidential. <br />
                <br />
                • As required by law, which can include providing information as
                required by a court order. <br />
                <br />
                • When we believe in good faith that disclosure is necessary to
                protect your safety or the safety of others, to protect our
                rights, to investigate fraud, or to respond to a government
                request. <br />
                <br />
                • To a buyer or other successor in the event of a merger,
                divestiture, restructuring, reorganization, dissolution or other
                sale or transfer of some or all of Telacoach's assets, whether
                as a going concern or as part of bankruptcy, liquidation or
                similar proceeding, in which Personal Information maintained by
                the Site is among the assets transferred. <br />
                <br />
                • For any other purpose disclosed by us when you provide the
                information. <br />
                <br />
                • IP addresses are used to identify the location of users, the
                number of visits from different countries and also to block
                disruptive use; and to analyze and improve the services offered
                on our website, e.g. to provide you with the most user-friendly
                navigation experience. <br />
                <br />
                • Certain information is needed to provide you with services, so
                we only delete this information after you delete your account.{" "}
                <br />
                <br />
                • Some forms of processing (sending promotional information,
                commercial profiling, behavioral advertising, geo-location,
                etc.) may require the express consent of the User. Specific
                information may be shown on the pages of the Site in connection
                with particular services or processing of Data provided by the
                Site User. <br />
                <br />
                • Telacoach uses industry-standard encryption technologies when
                transferring and receiving consumer data exchanged with our
                site. If you feel that this site is not following its stated
                information policy, you may contact us at support@Telacoach.com.{" "}
                <br />
                <br />
                • For content that is covered by intellectual property rights,
                like photos and videos you specifically grant Telacoach a
                non-exclusive, transferable, sub-licensable, royalty-free,
                worldwide license to use any IP content that you post on or in
                connection with the TelaCoach app or Telacoach (IP License).
                This IP License ends when you delete your IP content or your
                account unless your content has been shared with others, and
                they have not deleted it. This Paragraph does NOT apply to
                photos, images or other videos shared ONLY with your Coach in
                your private session/s while on the Platform. <br />
                <br />
                • Protecting the  of your fellow TelaCoach Users <br />
                <br />
                • During your use of Telacoach services, you will not send or
                otherwise post unauthorized commercial communications (such as
                spam) on Telacoach. <br />
                <br />
                • You will not collect users' content or information, or
                otherwise access Telacoach, using automated means (such as
                harvesting bots, robots, spiders, or scrapers) without our
                permission: <br />
                <br />
                ◦ You will not run malicious software, code, or viruses on the
                app or site. <br />
                <br />
                ◦ You will not solicit login information or access an account
                belonging to someone else.
                <br />
                <br />
                ◦ You will not abuse, bully, intimidate, or harass, or
                impersonate another User.
                <br />
                <br />
                ◦ You will not post content that is threatening, racist,
                hateful, pornographic; incites violence; or contains nudity or
                graphic or gratuitous violence.
                <br />
                <br />
                • You will not provide any false personal information on
                Telacoach, or create an account for anyone other than yourself
                without permission. You will not create more than one personal
                profile. You will not attempt to another user's account unless
                they have given you permission.
                <br />
                <br />
                Copyrights: TelaCoach and Protecting Other People's Intellectual
                Property Rights
                <br />
                • Here at Telacoach, we respect other people's rights, and
                expect users of the app to do the same. You will not post
                content or take any action on TelaCoach that infringes or
                violates someone else's rights or otherwise violates the law.
                You will be held liable for any action or postings that are
                deemed harmful to other users. We can remove any content or
                information you post on Telacoach if we believe that it violates
                this  Policy or the Terms of Use on this Site. You will
                not use our copyrights or any confusingly similar marks, without
                our written permission. If you collect information from
                TelaCoach Users, you will: obtain their consent, make it clear
                you (and not Telacoach) are the one collecting their
                information, and post a  policy explaining what
                information you collect and how you will use it. You will not
                post anyone's identification documents or sensitive financial
                information on Telacoach. You will not tag TelaCoach fellow
                Users or send email invitations to non-users without their
                consent. You will not pretend to represent Telacoach or enter
                into business transactions on behalf of the TelaCoach.
                <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  Portable Electronic Devices 
              </Typography>
                
                <br />
                • The TelaCoach Platform is available on a variety of portable
                electronic devices. We provide our connection to mobile services
                for free, but please be aware that your carrier's normal rates
                and fees, such as text messaging fees, may still apply. You
                provide all rights necessary to enable TelaCoach Users to sync
                (including through an application) their contact lists with any
                basic information and contact information that is visible to
                them on TelaCoach, as well as your name and profile picture.
                <br />
                <br />
                <strong>Your Use of Your Personal Data </strong>
                <br />
                • If a Telacoach User utilizes the Platform to publish or
                otherwise share their own Personal Data or Contact Information
                with third parties, he or she assumes full responsibility for
                any further use of that Data or information. <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  Disputes 
              </Typography>
                
                <br />
                • You will resolve any claim, cause of action or dispute (claim)
                you have with us arising out of or relating to this Statement or
                Telacoach exclusively in a state or federal court located in
                Texas. The laws of the State of Texas will govern this
                Statement, as well as any claim that might arise between you and
                us, without regard to conflict of law provisions. <br />
                <br />
                • If you or anyone brings a claim against us related to your
                actions, content or information on Telacoach, you will indemnify
                and hold us harmless from and against all damages, losses, and
                expenses of any kind (including reasonable legal fees and costs)
                related to such claim. None of the information on Telacoach
                should be considered medical advice. Telacoach will not be held
                responsible for any personal decisions that you make consequent
                to your use of Telacoach. None of the Content represents or
                warrants that any particular treatment, regimen, practice, or
                method recommended by any coach on Telacoach is safe, suitable,
                appropriate, or effective for you. Without limitation,
                Telacoachdoes not recommend or endorse any specific tests,
                procedures, providers, medications, or products.
                <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  Social Networks and TelaCoach 
              </Typography>
                
                <br />
                • These services allow the web site to access the data on your
                profile in the social networks, and to interact through your
                post. These services are not activated automatically, but
                require express authorization by the User. <br />
                <br />
                • TelaCoach Users can share information and Data supplied to the
                TelaCoach app and Site with the social networks with which the
                User is registered, accepting their  policy. Facebook
                social buttons/widgets (Facebook) Facebook Social button is a
                service run by Facebook Inc., a company that complies with the
                “Safe Harbor”  Policy Framework initiative, guaranteeing
                the handling of Personal Data. <br />
                <br />
                • Twitter is managed by Twitter, a company that complies with
                the “Safe Harbor”  Policy Framework initiative,
                guaranteeing the handling of Personal Information. <br />
                <br />
                <Typography
                align="left"
                variant={mobileDevice ? 'h4' : 'h3'}
                
              >
                  Cookies on Telacoach 
              </Typography>
                
                <br />
                • A cookie is a small amount of data, which often includes a
                unique identifier that is sent to your computer, tablet,
                phablet, cell phone or other electronic device (referred to here
                as a "device") browser from a website's computer and is stored
                on your device's hard drive. Each website can send its own
                cookie to your browser if your browser's preferences allow it,
                but (to protect your ) your browser only permits a
                website to access the cookies it has already sent to you, not
                the cookies sent to you by other sites. Many sites do this
                whenever a user visits their website in order to track traffic
                flows. <br />
                <br />
                • Cookies record information about your preferences and allow us
                to tailor TelaCoach to your interests. During the course or any
                visit to the Site, the pages you see, along with a cookie, are
                downloaded to your device. Many websites do this, because
                cookies enable website publishers to do useful things such as
                finding out whether the device (and probably its user) has
                visited the website before. This is done on a repeat visit by
                checking for the cookie left there on the previous visit. <br />
                <br />
                • Information supplied by cookies can help us to analyze the
                profile of our visitors so we can provide you with a better user
                experience. <br />
                <br />
                • Personal identifying information: Name, address, credit card
                number <br />
                <br />
                • We try to keep Telacoach safe, but you use it at your own
                risk. We are providing Telacoach “As Is” without any express or
                implied warranties. We do not guarantee that Telacoach will be
                safe or secure. Telacoach is not responsible for the actions,
                content, information, or data of third parties, and you release
                us, our directors, officers, employees, and agents from any
                claims and damages, known and unknown, arising out of or in any
                way connected with any claim you have against any such third
                parties. <br />
                <br />
                • We strive to create a global community with consistent
                standards for everyone, but we also strive to respect local
                laws. You consent to having your personal data transferred to
                and processed in the United States. If you are located in a
                country embargoed by the United States, or are on the U.S.
                Treasury Department's list of Specially Designated Nationals you
                will not engage in commercial activities on Telacoach (such as
                advertising or payments) By content we mean anything you post on
                Telacoach that would not be included in the definition of
                information. By data we mean content and information that third
                parties can retrieve from Telacoach or provide to Telacoach
                through Platform. By post we mean post on Telacoach or otherwise
                make available to us (such as by using an application). By use
                we mean use, copy, publicly perform or display, distribute,
                modify, translate, and/or create derivative works. <br />
                <br />
                • Telacoach openly volunteers its practices of collecting
                information, its targeting capabilities, and its use of cookies.
                If you have any questions pertaining to this  policy and
                its contents, please direct your correspondence to Telacoach at
                the "contact us" link on the website. <br />
                <br />
                • We keep all information not disclosed above private between
                the Coach and the User, keeping only non-decimated "file" copies
                for reference in case of legal dispute of by court order as we
                are required to under Federal Laws for period up to seven years
                or by the applicable State Regulation. File retention protects
                both the User and the Coaches safety. TelaCoach is not
                responsible for data lost/exposed/used due to the nature of the
                Internet and digital environments, including illegal actions of
                hackers and criminals, technical malfunctions of servers and
                database etc. These are the accepted risks of our Users and
                users of the Internet in general. You are agreeing to this
                standard in using our site. <br />
                <br />
                • TelaCoach reserves the right to change this  Statement
                at any time without notice, and only the current 
                Statement may be considered effective. Regardless of later
                updates or changes to our  notice, we will never use the
                information submitted under our current  notice in a new
                way without issuing you the opportunity to opt-out or otherwise
                prevent that use. <br />
                <br />
                • Clients will be charged for the first full month of the
                recurring monthly subscription plan if they cancel. No refunds
                will be issued for any sessions booked but not used in the
                recurring subscription plan. By signing up for the plan, user
                agrees to the terms. <br />
                <br />
                • Clients will be charged the full amount for single session
                bookings, if they cancel. There will be no refunds. By signing
                up for the plan, user agrees to the terms. <br />
                <br />
              </p>
        </Typography>
      
       
      </Container>
    </Page>
  );
};

export default AboutView;
