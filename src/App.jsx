// import { RouterProvider, useRoutes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Navigate, redirect } from 'react-router-dom';
import { HeaderProvider } from './context/HeaderContext.jsx';

import PageContainer from './containers/PageContainer.jsx';
import ErrorPage from './pages/Error.jsx';

import HomeContainer from './containers/HomeContainer.jsx';
import HomePage from './pages/Home/Home.jsx';

import SwimmingpoolContainer from './containers/SwimmingpoolContainer.jsx';
import SwimmingpoolPage from './pages/Swimmingpool/Swimmingpool.jsx';

import RoutineContainer from './containers/RoutineContainer.jsx';
import RoutinePage from './pages/Routine/Routine.jsx';
import RoutineDetailPage from './pages/Routine/RoutineDetail.jsx';
import RoutineCreatePage from './pages/Routine/RoutineCreate.jsx';
import RoutineUpdatePage from './pages/Routine/RoutineUpdate.jsx';

import MyContainer from './containers/MyContainer.jsx';
import MyPage from './pages/My/My.jsx';
import RecordPage from './pages/My/Record.jsx';
import ProfilePage from './pages/My/Profile.jsx';
import ExperiencePage from './pages/My/Experience.jsx';
import MyLevelPage from './pages/My/MyLevel.jsx';
import LevelTestPage from './pages/My/LevelTest.jsx';

import AccountsContainer from './containers/AccountsContainer.jsx';
import LoginPage from './pages/Oauth/Login.jsx';
import LoginRedirectPage from './pages/Oauth/LoginRedirect.jsx';
import JoinPage from './pages/Oauth/Join.jsx';
import TermsPage from './pages/Oauth/Terms.jsx';

import RegisterPage from './pages/Register/Index.jsx';
import { action as signupAction } from './pages/Register/Index.jsx';
import LevelTestRAG from './pages/My/LevelTestRAG.jsx';
import LevelTestResult from './pages/My/LevelTestResult.jsx';

const isLogined = () => {
  return localStorage.getItem('accessToken') !== null;
};
const ProtectedRoute = ({ children }) => {
  if (!isLogined()) {
    return <Navigate to='/accounts/login' replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    /// default page layout
    id: 'root',
    path: '/',
    element: <PageContainer />,
    errorElement: <ErrorPage />,
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
        element: (
          <ProtectedRoute>
            <SwimmingpoolContainer />
          </ProtectedRoute>
        ),
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
        element: (
          <ProtectedRoute>
            <RoutineContainer />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <RoutinePage />
          },
          {
            path: ':routineNo',
            element: <RoutineDetailPage />
          },
          {
            path: 'create',
            element: <RoutineCreatePage />
          },
          {
            path: 'update',
            element: <RoutineUpdatePage />
          }
        ]
      },
      // My
      {
        path: 'my',
        element: (
          <ProtectedRoute>
            <MyContainer />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <MyPage />
          },
          {
            path: 'profile',
            element: <ProfilePage />
          },
          {
            path: 'experience',
            element: <ExperiencePage />
          },
          {
            path: 'level',
            element: <MyLevelPage />
          },
          {
            path: 'level/test/:strokename',
            // element: <LevelTestPage />
            element: <LevelTestRAG />
          },
          {
            path: 'level/test/result',
            element: <LevelTestResult />
          },
          {
            path: 'record',
            element: <RecordPage />
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
        // element: <JoinPage />
        element: <RegisterPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />
      },
      {
        path: 'register',
        element: <RegisterPage />,
        action: signupAction
      },
      {
        path: 'experience',
        element: <ExperiencePage />
      }
    ]
  }
]);

const App = () => {
  return (
    <HeaderProvider>
      <RouterProvider router={router} />
    </HeaderProvider>
  );
};

export default App;
