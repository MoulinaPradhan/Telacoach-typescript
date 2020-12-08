import React, {
  Suspense,
  Fragment,
  lazy, FC
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import CoachDashboardLayout from 'src/layouts/CoachDashboardLayout';
import DocsLayout from 'src/layouts/DocsLayout';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/home/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
 
 
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/NotFoundView'))
  },
  {
    exact: true,
    path: '/change/password',
    component: lazy(() => import('src/views/auth/ChangePassword/LoginView'))
  },
 {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    path: '/login-unprotected',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register',
    component: lazy(() => import('src/views/auth/Register/Step0'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register/main',
    component: lazy(() => import('src/views/auth/RegisterView'))//the theme registration page
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register/coach',
    component: lazy(() => import('src/views/auth/Register/'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register/client',
    component: lazy(() => import('src/views/auth/RegisterClient'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register',
    component: lazy(() => import('src/views/auth/RegisterView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/termsandcondition',
    component: lazy(() => import('src/coachview/terms&conditions/AboutView'))
  },
  {
    exact: true,
    path: '/register-unprotected',
    component: lazy(() => import('src/views/auth/RegisterView'))
  },
  {
    path: '/client',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
     
      {
        exact: true,
        path: '/client/mysessions',
        component: lazy(() => import('src/coachview/sessions'))
      },
      {
        exact: true,
        path: '/client/aboutView',
        component: lazy(() => import('src/views/Privacy/AboutView'))
      },
      {
        exact: true,
        path: '/client/myplan',
        component: lazy(() => import('src/views/myplan/Subscription'))
      },
      {
        exact: true,
        path: '/client/privacy',
        component: lazy(() => import('src/views/private/AboutView'))
      },
      {
        exact: true,
        path: '/client/review',
        component: lazy(() => import('src/views/review/ProfileView'))
      },
      {
        exact: true,
        path: '/client/coachlist',
        component: lazy(() => import('src/views/coachlist/ClientListView'))
      },
      {
        exact: true,
        path: '/client/about',
        component: lazy(() => import('src/views/About/AboutView'))
      },
      {
        exact: true,
        path: '/client/account/personal',
        component: lazy(() => import('src/views/account/AccountView'))
      },
      {
        exact: true,
        path: '/client/session/booking',
        component: lazy(() => import('src/views/booksession/AccountView'))
      },
      {
        exact: true,
        path: '/client/calendar',
        component: lazy(() => import('src/views/calendar/CalendarView'))
      },
      {
        exact: true,
        path: [
          '/client/chat/new',
          '/client/chat/:threadKey'
        ],
        component: lazy(() => import('src/views/chat/ChatView'))
      },
      {
        exact: true,
        path: '/client/chat',
        component: () => <Redirect to="/client/chat/new" />
      },
      {
        exact: true,
        path: '/client/extra/charts/apex',
        component: lazy(() => import('src/views/extra/charts/ApexChartsView'))
      },
      {
        exact: true,
        path: '/client/extra/forms/formik',
        component: lazy(() => import('src/views/extra/forms/FormikView'))
      },
      {
        exact: true,
        path: '/client/extra/forms/redux',
        component: lazy(() => import('src/views/extra/forms/ReduxFormView'))
      },
      {
        exact: true,
        path: '/client/extra/editors/draft-js',
        component: lazy(() => import('src/views/extra/editors/DraftEditorView'))
      },
      {
        exact: true,
        path: '/client/extra/editors/quill',
        component: lazy(() => import('src/views/extra/editors/QuillEditorView'))
      },
      {
        exact: true,
        path: '/client/kanban',
        component: lazy(() => import('src/views/kanban/KanbanView'))
      },
      {
        exact: true,
        path: [
          '/client/mail/label/:customLabel/:mailId?',
          '/client/mail/:systemLabel/:mailId?'
        ],
        component: lazy(() => import('src/views/mail/MailView'))
      },
      {
        exact: true,
        path: '/client/mail',
        component: () => <Redirect to="/client/mail/all" />
      },
      {
        exact: true,
        path: '/client/management/customers',
        component: lazy(() => import('src/views/customer/CustomerListView'))
      },
      {
        exact: true,
        path: '/client/management/customers/:customerId',
        component: lazy(() => import('src/views/customer/CustomerDetailsView'))
      },
      {
        exact: true,
        path: '/client/management/customers/:customerId/edit',
        component: lazy(() => import('src/views/customer/CustomerEditView'))
      },
      {
        exact: true,
        path: '/client/invoices',
        component: lazy(() => import('src/views/invoice/InvoiceListView'))
      },
      {
        exact: true,
        path: '/client/invoices/:invoiceId',
        component: lazy(() => import('src/views/invoice/InvoiceDetailsView'))
      },
      {
        exact: true,
        path: '/client/management/orders',
        component: lazy(() => import('src/views/order/OrderListView'))
      },
      {
        exact: true,
        path: '/client/management/orders/:orderId',
        component: lazy(() => import('src/views/order/OrderDetailsView'))
      },
      {
        exact: true,
        path: '/client/management/products',
        component: lazy(() => import('src/views/product/ProductListView'))
      },
      {
        exact: true,
        path: '/client/management/products/create',
        component: lazy(() => import('src/views/product/ProductCreateView'))
      },
      {
        exact: true,
        path: '/client/management',
        component: () => <Redirect to="/client/management/customers" />
      },
      {
        exact: true,
        path: '/client/projects/overview',
        component: lazy(() => import('src/views/project/OverviewView'))
      },
      {
        exact: true,
        path: '/client/projects/browse',
        component: lazy(() => import('src/views/project/ProjectBrowseView'))
      },
      {
        exact: true,
        path: '/client/projects/create',
        component: lazy(() => import('src/views/project/ProjectCreateView'))
      },
      {
        exact: true,
        path: '/client/projects/:id',
        component: lazy(() => import('src/views/project/ProjectDetailsView'))
      },
      {
        exact: true,
        path: '/client/projects',
        component: () => <Redirect to="/client/projects/browse" />
      },
      {
        exact: true,
        path: '/client',
        component: () => <Redirect to="/client/dashboard" />
      },
     
      {
        exact: true,
        path: '/client/dashboard',
        component: lazy(() => import('src/views/reports/DashboardView'))
      },
      {
        exact: true,
        path: '/client/reports/dashboard-alternative',
        component: lazy(() => import('src/views/reports/DashboardAlternativeView'))
      },
      {
        exact: true,
        path: '/client/reports',
        component: () => <Redirect to="/client/reports/dashboard" />
      },
      {
        exact: true,
        path: '/client/social/feed',
        component: lazy(() => import('src/views/social/FeedView'))
      },
      {
        exact: true,
        path: '/client/social/profile',
        component: lazy(() => import('src/views/social/ProfileView'))
      },
      {
        exact: true,
        path: '/client/social',
        component: () => <Redirect to="/client/social/profile" />
      },
      {
        exact: true,
        path:'/client/notifications/all',
        component: lazy(() => import('src/views/notifications/CustomerListView'))
      },
      {
        exact: true,
        path: '/client',
        component: () => <Redirect to="/client/reports/dashboard" />
      },
      //new paths
      {
        exact: true,
        path: '/client/communityroom',
        component: lazy(() => import('src/views/communityroom/FeedView'))
      },
      {
        exact: true,
        path: '/client/account/password',
        component: lazy(() => import('src/views/password/Security'))
      },
      {
        exact: true,
        path: '/client/plans',
        component: lazy(() => import('src/views/plans/PricingView'))
      },
      {
        exact: true,
        path: '/client/account/notifications',
        component: lazy(() => import('src/views/notification/Notifications'))
      },
      {
        exact: true,
        path: '/client/account/faq',
        component: lazy(() => import('src/views/faq/Faq'))
      },
      {
        exact: true,
        path: '/client/account/helpcenter',
        component: lazy(() => import('src/views/helpcenter/HelpView'))
      },
      {
        exact: true,
        path: '/client/account/report',
        component: lazy(() => import('src/views/report/Report'))
      },
      {
        exact: true,
        path: '/client/request/coach',
        component: lazy(() => import('src/views/coachlist/ProjectBrowseView'))
      },
      {
        exact: true,
        path: '/client/account/help&support',
        component: lazy(() => import('src/views/helpandsupport/AccountView'))
      },
      {
        exact: true,
        path: '/client/account/legal',
        component: lazy(() => import('src/views/legal/AccountView'))
      },
      {
        exact: true,
        path: '/client/contact',
        component: lazy(() => import('src/coachview/contact/UserDetails'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/coach',
    guard: AuthGuard,
    layout: CoachDashboardLayout,
    routes: [
      {
        exact: true,
        path: '/coach/calendar',
        component: lazy(() => import('src/coachview/calendar/CalendarView'))
      },{
        exact: true,
        path: [
          '/coach/messages/new',
          '/coach/messages/:threadKey'
        ],
        component: lazy(() => import('src/coachview/chat/ChatView'))
      },
      {
        exact: true,
        path: '/coach/messages',
        component: () => <Redirect to="/coach/messages/new" />
      },
      {
        exact: true,
        path: '/coach/account/professional',
        component: lazy(() => import('src/coachview/professionalaccount/AccountView'))
      },
      {
        exact: true,
        path: '/coach/account/password',
        component: lazy(() => import('src/coachview/password/Security'))
      },
      {
        exact: true,
        path: '/coach/account/notifications',
        component: lazy(() => import('src/coachview/notification/Notifications'))
      },
      {
        exact: true,
        path: '/coach/account/terms&conditions',
        component: lazy(() => import('src/coachview/terms&conditions/AboutView'))
      },
      {
        exact: true,
        path: '/coach/account/helpcenter',
        component: lazy(() => import('src/coachview/helpcenter/HelpView'))
      },
      {
        exact: true,
        path: '/coach/account/privacy',
        component: lazy(() => import('src/coachview/privacy/Privacy'))
      },
      {
        exact: true,
        path: '/coach/account/faq',
        component: lazy(() => import('src/coachview/faq/Faq'))
      },
      {
        exact: true,
        path: '/coach/about',
        component: lazy(() => import('src/coachview/certificate/AccountView'))
      },
      // {
      //   exact: true,
      //   path: '/coach/account/certificate',
      //   component: lazy(() => import('src/coachview/certificate/ProjectDetailsView'))
      // },
      {
        
        exact: true,
        path: '/coach/invoices',
        component: lazy(() => import('src/coachview/invoice/InvoiceListView'))

      },
      {
        
        exact: true,
        path: '/coach/invoices/:invoiceId',
        component: lazy(() => import('src/coachview/invoice/InvoiceDetailsView'))

      },
      
      {
        exact: true,
        path: '/coach/account/personal',
        component: lazy(() => import('src/coachview/account/AccountView'))
      },
      {
        exact: true,
        path: '/coach/connect',
        component: lazy(() => import('src/coachview/connect/ClientListView'))
      },
      {
        exact: true,
        path: '/coach/account/report',
        component: lazy(() => import('src/coachview/report/Report'))
      },{
        exact: true,
        path: '/coach/account/help&support',
        component: lazy(() => import('src/coachview/helpandsupport/AccountView'))
      },
      
      {
        exact: true,
        path: '/coach/account/legal',
        component: lazy(() => import('src/coachview/legal/AccountView'))
      },
      {
        exact: true,
        path: '/coach/mysession',
        component: lazy(() => import('src/coachview/sessions'))
      },
      {
        exact: true,
        path: '/coach/booking/request',
        component: lazy(() => import('src/coachview/booking/InvoiceListView'))
      },
      {
        exact: true,
        path: '/coach/notifications/all',
        component: lazy(() => import('src/coachview/notifications/CustomerListView'))
      },
      {
        exact: true,
        path: '/coach/contact',
        component: lazy(() => import('src/coachview/contact/UserDetails'))
      },
      {
        exact: true,
        path: '/coach/dashboard',
        component: lazy(() => import('src/coachview/calendar/CalendarView'))
      },
      {
        exact: true,
        path: '/coach',
        component: () => <Redirect to="/coach/dashboard"/>
      },
    
    
    ]
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to="/client/dashboard"/>
      },
      {
        exact: true,
        path: '/pricing',
        component: lazy(() => import('src/views/pricing/PricingView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];

export default routes;
