import { Outlet } from "react-router-dom";
import usePageSetup from '../hooks/usePageSetup';

const MyContainer = () => {
    usePageSetup("my");
    // console.log('MyContainer');
    return (
        <Outlet />
    )
}

export default MyContainer;