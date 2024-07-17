import { Outlet } from "react-router-dom";
import usePageSetup from '../hooks/usePageSetup';
import CenterWrapper from "../components/Layout/CenterWrapper.jsx";

const RoutineContainer = () => {
    usePageSetup("routine", CenterWrapper);
    return (
        <>
            <Outlet />
        </>
    )
}
export default RoutineContainer;