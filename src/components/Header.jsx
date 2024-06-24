import {Logo} from "./Logo.jsx";

export const Header = () =>{
    let headerClassName = "sticky top-0 z-50 w-full h-12 p-1 flex flex-row justify-between bg-white border-b-[0.1px] border-b-neutral-200";
    let logoContainerClassName="logo-container w-full max-w-24 h-full flex items-center p-5";
    let accountContainerClassName="account-container w-full max-w-32 p-3 flex flex-row justify-around text-xs text-neutral-500";
    let accountContainerBtnClassName="w-full cursor-pointer";
    return (
        <header id="header" className={headerClassName}>
            <div className={logoContainerClassName}>
                <Logo/>
            </div>
            <div className={accountContainerClassName}>
                <button className={accountContainerBtnClassName}>로그인</button>
                <button className={accountContainerBtnClassName}>회원가입</button>
            </div>
        </header>
    )
}