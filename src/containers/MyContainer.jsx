import { Outlet } from "react-router-dom";
import usePageSetup from '../hooks/usePageSetup';

const MyContainer = () => {
    usePageSetup("my");

    return (
        <Outlet />
    )
}

export default MyContainer;