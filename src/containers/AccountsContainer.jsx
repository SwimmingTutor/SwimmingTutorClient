import { Outlet } from 'react-router-dom';
import Wrapper from '../components/Layout/Wrapper.jsx';
import AccounstHeader from '../components/AccountsHeader.jsx';
import CenterWrapper from '../components/Layout/CenterWrapper.jsx';

const AccountsContainer = () => {
  return (
    <Wrapper>
      <CenterWrapper>
        <AccounstHeader />
        {/* <Outlet context={{ handleHeaderType }} /> */}
        <Outlet />
      </CenterWrapper>
    </Wrapper>
  );
};

export default AccountsContainer;
