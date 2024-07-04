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
        name: "홈",
        page: "home",
        path: "",
        icon: HomeIcon,
        active_icon: HomeIconActiveIcon,
    },
    {
        name: "수영장",
        page: "swimmingpool",
        path: "/swimmingpool",
        icon: SwimmingPoolIcon,
        active_icon: SwimmingPoolActiveIcon,
    },
    {
        name: "루틴",
        page: "routine",
        path: "/routine",
        icon: RoutineIcon,
        active_icon: RoutineActiveIcon,
    },
    {
        name: "마이",
        page: "my",
        path: "/my",
        icon: MyIcon,
        active_icon: MyActiveIcon,
    },
];

const NavElement = ({ page, path, name, icon, activeIcon, activePage }) => {
    return (
        <Link className='cursor-pointer w-9 flex flex-col justify-between items-center' to={path}>
            <img src={icon} alt={name} className='w-4/6 object-contain mx-auto' />
            {/* <p className={"w-full text-xs text-center tracking-tighter "+textColor}>{name}</p> */}
        </Link>
    )
}

export const Nav = ({ activePage }) => {
    return createPortal(
        <div className="fixed bottom-0 w-full h-14 z-40">
            <div className="dock-container container w-app h-full">
                <nav className="
                                dock-menu w-full h-full px-4 pt-4 pb-3 
                                flex flex-row justify-around gap-16 
                                border-t-[0.1px] border-b-neutral-200 bg-white
                                ">
                    {
                        NAV_ELEMENT_INFO.map((item) => (
                            <NavElement
                                key={item.name}
                                page={item.page}
                                path={item.path}
                                name={item.name}
                                icon={(activePage===item.page)?(item.active_icon):(item.icon)}
                            />
                        )
                        )
                    }
                </nav>
            </div>
        </div>, document.getElementById('dock')
    )
}