import { Outlet } from 'react-router-dom';
import Wrapper from '../components/Layout/Wrapper.jsx';
import AccounstHeader from '../components/AccountsHeader.jsx';

const AccountsContainer = () => {
  return (
    <Wrapper>
      <AccounstHeader />
      {/* <Outlet context={{ handleHeaderType }} /> */}
      <Outlet />
    </Wrapper>
  );
};

export default AccountsContainer;
