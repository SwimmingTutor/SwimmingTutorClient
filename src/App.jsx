import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageContainer from './containers/PageContainer.jsx';
import ErrorPage from './pages/Error.jsx';

import HomeContainer from './containers/HomeContainer.jsx';
import HomePage from './pages/Home/Home.jsx';

import SwimmingpoolContainer from './containers/SwimmingpoolContainer.jsx';
import SwimmingpoolPage from './pages/Swimmingpool/Swimmingpool.jsx';

import RoutineContainer from './containers/RoutineContainer.jsx';
import RoutinePage from './pages/Routine/Routine.jsx';

import MyContainer from './containers/MyContainer.jsx';
import MyPage from './pages/My/My.jsx';
import RecordPage from './pages/My/Record.jsx';
import ProfilePage from './pages/My/Profile.jsx';
import ExperiencePage from './pages/My/Experience.jsx';

import AccountsContainer from './containers/AccountsContainer.jsx'
import LoginPage from './pages/Oauth/Login.jsx'
import JoinPage from './pages/Oauth/Join.jsx'
import TermsPage from './pages/Oauth/Terms.jsx'

const router = createBrowserRouter([
  {
    /// default page layout
    id: 'root',
    path: '/',
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    // TODO: 인증 loader-tokenLoader 정의
    children: [
      // Home
      {
        path: '',
        element: <HomeContainer />,
        children: [
          {
            index: true,
            element: <HomePage />,
          }
        ]
      },
      // SwimmingPool
      {
        path: 'swimmingpool',
        element: <SwimmingpoolContainer />,
        children: [
          {
            index: true,
            element: <SwimmingpoolPage />,
          }
        ]
      },
      // Routine
      {
        path: 'routine',
        element: <RoutineContainer />,
        children: [
          {
            index: true,
            element: <RoutinePage />
          },
        ]
      },
      // My
      {
        path: 'my',
        element: <MyContainer />,
        children: [
          {
            index: true,
            element: <MyPage />
          },
          {
            path: 'record',
            element: <RecordPage />
          },
          {
            path: 'profile',
            element: <ProfilePage />
          },
          {
            path: 'experience',
            element: <ExperiencePage />
          },
        ]
      }
    ]
  },
  // OAuth Layout
  {
    path: '/accounts',
    element: <AccountsContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'join',
        element: <JoinPage />
      },
      {
        path: 'terms',
        element: <TermsPage />
      },

    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
