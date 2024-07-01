import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/Nav.jsx';
import { MainPage } from './pages/main/MainPage.jsx';
import { SwimmingpoolPage } from './pages/swimmingpool/SwimmingpoolPage.jsx';
import { RoutinePage } from './pages/routine/RoutinePage.jsx';
import { MyPage } from './pages/my/MyPage.jsx';

import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { TestPage } from './pages/TestPage.jsx';
import { PageContainer } from './containers/PageContainer.jsx';
import { LoginPage } from './pages/accounts/LoginPage.jsx';
import { AccountsContainer } from './containers/AccountsContainer.jsx';
import { JoinPage } from './pages/accounts/JoinPage.jsx';
import { RecordPage } from './pages/my/RecordPage.jsx';

function App() {
  return (
    <>
      <Routes>
        {/* default page layout */}
        <Route path="/" element={<PageContainer />}>
          <Route path='' element={<MainPage />} />
          <Route path='swimmingpool' element={<SwimmingpoolPage />} />
          <Route path='routine' element={<RoutinePage />} />

          <Route path='my'>
            <Route path='' element={<MyPage />}/> 
            <Route path='record' element={<RecordPage />}/> 
          </Route>

          {/* 없는 페이지 요청 시 */}
          <Route path='*' element={<NotFoundPage />} />
          {/* test page TODO: delete*/}
          <Route path='/test' element={<TestPage />} />
        </Route>

        {/* accounts 관련 페이지 */}
        <Route path="/accounts" element={<AccountsContainer />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='join' element={<JoinPage />} />
        </Route>
      </Routes>
      <Nav />
    </>
  )
}
export default App;