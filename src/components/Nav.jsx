import { Link } from 'react-router-dom';

import HomeIcon from '../assets/icons/home.svg';
import HomeIconActiveIcon from '../assets/icons/home-active.svg';

import SwimmingPoolIcon from '../assets/icons/swimmingpool.svg';
import SwimmingPoolActiveIcon from '../assets/icons/swimmingpool-active.svg';

import RoutineIcon from '../assets/icons/routine.svg';
import RoutineActiveIcon from '../assets/icons/routine-active.svg';

import MyIcon from '../assets/icons/my.svg';
import MyActiveIcon from '../assets/icons/my-active.svg';
import { createPortal } from 'react-dom';

const NAV_ELEMENT_INFO = [
  {
    name: '홈',
    page: 'home',
    path: '',
    icon: HomeIcon,
    active_icon: HomeIconActiveIcon
  },
  // {
  //   name: '수영장',
  //   page: 'swimmingpool',
  //   path: '/swimmingpool',
  //   icon: SwimmingPoolIcon,
  //   active_icon: SwimmingPoolActiveIcon
  // },
  {
    name: '루틴',
    page: 'routine',
    path: '/routine',
    icon: RoutineIcon,
    active_icon: RoutineActiveIcon
  },
  {
    name: '마이',
    page: 'my',
    path: '/my',
    icon: MyIcon,
    active_icon: MyActiveIcon
  }
];

const NavElement = ({ page, path, name, icon, activeIcon, activePage }) => {
  return (
    <Link className='flex w-9 cursor-pointer flex-col items-center justify-between' to={path}>
      <img src={icon} alt={name} className='mx-auto w-4/6 object-contain' />
      {/* <p className={"w-full text-xs text-center tracking-tighter "+textColor}>{name}</p> */}
    </Link>
  );
};

const Nav = ({ activePage }) => {
  return createPortal(
    <div className='fixed bottom-0 z-40 h-14 w-full'>
      <div className='dock-container container h-full w-full lg:w-app'>
        <nav
          className='
            dock-menu flex h-full w-full flex-row justify-around 
            gap-16 border-t-[0.1px] border-b-neutral-200 bg-white 
            px-4 pb-3 pt-4
        '
        >
          {NAV_ELEMENT_INFO.map(item => (
            <NavElement
              key={item.name}
              page={item.page}
              path={item.path}
              name={item.name}
              icon={activePage === item.page ? item.active_icon : item.icon}
            />
          ))}
        </nav>
      </div>
    </div>,
    document.getElementById('dock')
  );
};
export default Nav;
