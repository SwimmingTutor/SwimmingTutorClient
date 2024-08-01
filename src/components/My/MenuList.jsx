import Menu from "../Menu.jsx";

const MANU_ELEMENT_INFO = [
    // {
    //     name: "기록하기",
    //     path: "record",
    // },
    {
        name: "프로필 설정",
        path: "profile",
    },
    {
        name: "수영 경험 설정",
        path: "experience",
    },
    {
        name: "내 수영 레벨",
        path: "level",
    },
];
const MenuList = () => {
    return (
        <div className="w-full h-fit flex flex-col gap-3 text-[0.9rem] font-light">
            {
                MANU_ELEMENT_INFO.map((item) => 
                    <Menu key={item.name} name={item.name} path={item.path}/>
                )
            }
        </div>
    )
}
export default MenuList;