import { Outlet } from "react-router-dom";
import usePageSetup from '../hooks/usePageSetup';
import CenterWrapper from "../components/Layout/CenterWrapper.jsx";

const SwimmingpoolContainer = () => {
    usePageSetup("swimmingpool", CenterWrapper);
    return (
        <>
            <Outlet />
        </>
    )
}
export default SwimmingpoolContainer;