import { Outlet } from "react-router-dom";
import usePageSetup from '../hooks/usePageSetup';

const RoutineContainer = () => {
    usePageSetup("routine");
    return (
        <>
            <Outlet />
        </>
    )
}
export default RoutineContainer;