import { useState, useEffect } from 'react';
import { useHeaderContext } from '../context/HeaderContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './UI/Logo.jsx';
import PageTitle from './PageTitle.jsx';

function getHeaderType(type) {
  return {
    home: <Logo />,
    swimmingpool: <PageTitle title='수영장'></PageTitle>,
    routine: <PageTitle title='수영 루틴'></PageTitle>,
    my: <PageTitle title='마이'></PageTitle>,
    join: <PageTitle title='회원가입'></PageTitle>
  }[type];
}

const Header = () => {
  const { headerType } = useHeaderContext();

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

  return (
    <header id='header' className='fixed top-0 z-40 w-full bg-white  lg:w-app'>
      <div className='mx-auto flex h-14 items-center justify-between px-5 lg:w-app'>
        <div className='flex max-w-[7rem] items-center'>{getHeaderType(headerType)}</div>
        <div className='flex space-x-4 text-xs'>
          {isLoggedIn ? (
            <button className='cursor-pointer hover:text-primary-500' onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <>
              <Link className='cursor-pointer hover:text-primary-500' to='/accounts/login'>
                로그인
              </Link>
              {/* <Link className='cursor-pointer hover:text-primary-500' to='/accounts/join'>
                회원가입
              </Link> */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
