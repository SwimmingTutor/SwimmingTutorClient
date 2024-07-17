import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Wrapper from "../components/Layout/Wrapper.jsx";
import Main from "../components/Layout/Main.jsx";
import Nav from "../components/Nav.jsx";

const PageContainer = () => {
    const [headerType, setHeaderType] = useState("home");
    const [WrapperComponent, setWrapperComponent] = useState(()=>Main);

    const handleHeaderType = (page) => {
        setHeaderType(page);
    };
    const handleWrapper = (Component) => {
        setWrapperComponent(() => Component);
    }

    return (
        <>
            <Wrapper>
                <Header headerType={headerType} />
                <WrapperComponent>
                    <Outlet context={{ handleHeaderType, handleWrapper }} />
                </WrapperComponent>
                <Footer />
            </Wrapper>
            <Nav activePage={headerType}/>
        </>
    )
}

export default PageContainer;