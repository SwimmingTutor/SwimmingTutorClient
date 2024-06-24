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
        link: "",
        icon: HomeIcon,
        active_icon: HomeIconActiveIcon,
    },
    {
        name: "수영장",
        link: "",
        icon: SwimmingPoolIcon,
        active_icon: SwimmingPoolActiveIcon,
    },
    {
        name: "루틴",
        link: "",
        icon: RoutineIcon,
        active_icon: RoutineActiveIcon,
    },
    {
        name: "마이",
        link: "",
        icon: MyIcon,
        active_icon: MyActiveIcon,
    },
];

const NavElement = ({ link, name, icon, activeIcon, isActive }) => {
    let iconSrc = icon;
    let textColor = " text-neutral-500";
    if (isActive) { 
        iconSrc = activeIcon; 
        textColor = " text-primary";
    }

    function handleClickNavButton() {
        // link props use
    }
    return (
        <button className='cursor-pointer w-9' onClick={handleClickNavButton}>
            <img src={iconSrc} alt={name} />
            <p className={"text-xs"+textColor}>{name}</p>
        </button>
    )
}

export const Nav = () => {
    return (
        <aside id="dock" className="fixed bottom-0 w-full h-28 z-50 bg-white">
            <div className="dock-container w-[440px] m-auto">
                <nav className="dock-menu w-full px-10 py-5 flex flex-row justify-around gap-16 border-t-[0.1px] border-b-neutral-200">
                    {
                        NAV_ELEMENT_INFO.map((item) => (
                            <NavElement
                                key={item.name}
                                link={item.link}
                                name={item.name}
                                icon={item.icon}
                                activeIcon={item.active_icon}
                                isActive={false}
                            />
                        )
                        )
                    }
                </nav>
            </div>
        </aside>
    )
}