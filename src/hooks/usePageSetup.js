import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Main } from "../components/Main.jsx";

const usePageSetup = (headerType="home", WrapperComponent=Main) => {
    const { handleHeaderType, handleWrapper } = useOutletContext();

    useEffect(() => {
        if (headerType) {
            handleHeaderType(headerType);
        }
        if (WrapperComponent) {
            handleWrapper(WrapperComponent);
        }
    }, [headerType, WrapperComponent, handleHeaderType, handleWrapper]);
};

export default usePageSetup;