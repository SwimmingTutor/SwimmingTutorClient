import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Wrapper from "../components/Layout/Wrapper.jsx";
import Main from "../components/Layout/Main.jsx";
import Nav from "../components/Nav.jsx";

const PageContainer = ({children}) => {
    const [headerType, setHeaderType] = useState("home");

    const handleHeaderType = (page) => {
        setHeaderType(page);
    };

    return (
        <>
            <Wrapper>
                <Header headerType={headerType} />
                <Main>
                    <Outlet context={{ handleHeaderType }} />
                    {children}
                </Main>
                <Footer />
            </Wrapper>
            <Nav activePage={headerType}/>
        </>
    )
}

export default PageContainer;