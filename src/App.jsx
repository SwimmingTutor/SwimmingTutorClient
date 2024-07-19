import { useRoutes } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageContainer from './containers/PageContainer.jsx';
import ErrorPage from './pages/Error.jsx';

import HomeContainer from './containers/HomeContainer.jsx';
import HomePage from './pages/Home/Home.jsx';

import SwimmingpoolContainer from './containers/SwimmingpoolContainer.jsx';
import SwimmingpoolPage from './pages/Swimmingpool/Swimmingpool.jsx';

import RoutineContainer from './containers/RoutineContainer.jsx';
import RoutinePage from './pages/Routine/Routine.jsx';

import MyContainer from './containers/MyContainer.jsx';
import MyPage from './pages/my/My.jsx';
import RecordPage from './pages/My/Record.jsx';
import ProfilePage from './pages/My/Profile.jsx';
import ExperiencePage from './pages/My/Experience.jsx';
import MyLevelPage from './pages/my/MyLevel.jsx';
import LevelTestPage from './pages/my/LevelTest.jsx';

import AccountsContainer from './containers/AccountsContainer.jsx';
import LoginPage from './pages/Oauth/Login.jsx';
import LoginRedirectPage from './pages/Oauth/LoginRedirect.jsx';
import JoinPage from './pages/Oauth/Join.jsx';
import TermsPage from './pages/Oauth/Terms.jsx';

const App = () => {
  // console.log('App');
  const routes = useRoutes([
    // const router = createBrowserRouter([
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
              element: <HomePage />
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
              element: <SwimmingpoolPage />
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
            }
          ]
        },
        // My
        {
          path: 'my',
          element: <MyContainer />,
          children: [
            {
              path: '',
              element: <MyPage />
            },
            {
              path: 'level',
              element: <MyLevelPage />
            },
            {
              path: 'level/test/:strokename',
              element: <LevelTestPage />
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
            }
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
          path: 'login-redirect',
          element: <LoginRedirectPage />
        },
        {
          path: 'join',
          element: <JoinPage />
        },
        {
          path: 'terms',
          element: <TermsPage />
        }
      ]
    }
  ]);

  // const App = () => {
  return routes;
  // return <RouterProvider router={router} />;
};

export default App;

