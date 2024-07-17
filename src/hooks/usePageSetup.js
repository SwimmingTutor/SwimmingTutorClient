import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const usePageSetup = (headerType = "home") => {
    const { handleHeaderType } = useOutletContext();

    useEffect(() => {
        if (headerType) {
            handleHeaderType(headerType);
        }
    }, [headerType, handleHeaderType]);
};

export default usePageSetup;