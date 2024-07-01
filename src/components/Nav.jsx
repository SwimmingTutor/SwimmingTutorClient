import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../assets/icons/home.svg';
import HomeIconActiveIcon from '../assets/icons/home-active.svg';

import SwimmingPoolIcon from '../assets/icons/swimmingpool.svg';
import SwimmingPoolActiveIcon from '../assets/icons/swimmingpool-active.svg';

import RoutineIcon from '../assets/icons/routine.svg';
import RoutineActiveIcon from '../assets/icons/routine-active.svg';

import MyIcon from '../assets/icons/my.svg';
import MyActiveIcon from '../assets/icons/my-active.svg';


const NAV_ELEMENT_INFO = [
    {
        name: "홈",
        page: "",
        icon: HomeIcon,
        active_icon: HomeIconActiveIcon,
    },
    {
        name: "수영장",
        page: "swimmingpool",
        icon: SwimmingPoolIcon,
        active_icon: SwimmingPoolActiveIcon,
    },
    {
        name: "루틴",
        page: "routine",
        icon: RoutineIcon,
        active_icon: RoutineActiveIcon,
    },
    {
        name: "마이",
        page: "my",
        icon: MyIcon,
        active_icon: MyActiveIcon,
    },
];

const NavElement = ({ page, name, icon, activeIcon }) => {
    const location = useLocation();
    let path = location.pathname.split('/')[1];
    // let path = location.pathname.split('/').pop();
    const isActive=path===page;

    let iconSrc = icon;
    let textColor = " ";
    if (isActive) { 
        iconSrc = activeIcon; 
        textColor = " text-primary";
    }

    return (
        <Link className='cursor-pointer w-9 flex flex-col justify-between items-center' to={"/"+page}>
            <img src={iconSrc} alt={name} className='w-4/6'/>
            {/* <p className={"w-full text-xs text-center tracking-tighter "+textColor}>{name}</p> */}
        </Link>
    )
}

export const Nav = () => {
    return (
        <aside id="dock" className="fixed bottom-0 w-full h-14 z-40">
            <div className="dock-container container w-app h-full">
                <nav className="
                                dock-menu w-full h-full px-4 pt-4 pb-3 
                                flex flex-row justify-around gap-16 
                                border-t-[0.1px] border-b-neutral-200 rounded-t-lg bg-white
                                ">
                    {
                        NAV_ELEMENT_INFO.map((item) => (
                            <NavElement
                                key={item.name}
                                page={item.page}
                                name={item.name}
                                icon={item.icon}
                                activeIcon={item.active_icon}
                            />
                        )
                        )
                    }
                </nav>
            </div>
        </aside>
    )
}