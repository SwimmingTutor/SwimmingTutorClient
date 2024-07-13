import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import { MenuList } from "../../components/ManuList.jsx"
import usePageSetup from "../../hooks/usePageSetup.js";

export const MyPage = () => {
    usePageSetup("my");
    return (
        <MenuList />
    )
}