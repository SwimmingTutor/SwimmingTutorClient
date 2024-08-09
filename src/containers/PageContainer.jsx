import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useHeaderContext } from '../context/HeaderContext.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Wrapper from '../components/Layout/Wrapper.jsx';
import Main from '../components/Layout/Main.jsx';
import Nav from '../components/Nav.jsx';

const PageContainer = ({ children }) => {
  const { headerType, handleHeaderType } = useHeaderContext();
  // console.log('headerType:', headerType);

  return (
    <>
      <Wrapper>
        <Header headerType={headerType} />
        <Main>
          <Outlet context={{ handleHeaderType }} />
          {children}
        </Main>
      </Wrapper>
      <Nav activePage={headerType} />
    </>
  );
};

export default PageContainer;
