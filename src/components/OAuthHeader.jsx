import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './UI/Logo.jsx';
import PageTitle from './PageTitle.jsx';

function getHeaderType(type) {
  return {
    home: <Logo />,
    terms: <PageTitle title='약관동의'></PageTitle>,
    join: <PageTitle title='회원가입'></PageTitle>,
    profile: <PageTitle title='프로필 설정'></PageTitle>,
    experience: <PageTitle title='수영 경험 설정'></PageTitle>
  }[type];
}

const OAuthHeader = ({ headerType, off = '' }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    navigate('/accounts/login');
  };

  const headerClassName = 'sticky top-0 z-40 w-full h-14 p-1 flex flex-row justify-between items-center bg-white ';
  const logoContainerClassName = 'logo-container w-full h-full flex items-center p-5 ';
  const accountContainerClassName = 'account-container w-full max-w-32 p-3 flex flex-row justify-around text-xs';
  const accountContainerBtnClassName = 'w-full cursor-pointer hover:text-primary-500';

  return (
    <header id='header' className={headerClassName}>
      <div className={logoContainerClassName}>{getHeaderType(headerType)}</div>
      {off ? (
        <></>
      ) : (
        <div className={accountContainerClassName}>
          {isLoggedIn ? (
            <button className={accountContainerBtnClassName} onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <>
              <Link className={accountContainerBtnClassName} to='/accounts/login'>
                로그인
              </Link>
              <Link className={accountContainerBtnClassName} to='/accounts/join'>
                회원가입
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default OAuthHeader;
