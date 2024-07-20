import { Outlet } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper.jsx';
import { AccounstHeader } from '../components/AccountsHeader.jsx';
import { CenterWrapper } from '../components/CenterWrapper.jsx';

export const AccountsContainer = () => {
  return (
    <Wrapper>
      {/* <CenterWrapper> */}
      {/* <AccounstHeader /> */}
      {/* <Outlet context={{ handleHeaderType }} /> */}
      <Outlet />
      {/* </CenterWrapper> */}
    </Wrapper>
  );
};
