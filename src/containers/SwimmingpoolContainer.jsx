import { Outlet } from "react-router-dom";
import usePageSetup from '../hooks/usePageSetup';

const SwimmingpoolContainer = () => {
    usePageSetup("swimmingpool");
    return (
        <>
            <Outlet />
        </>
    )
}
export default SwimmingpoolContainer;