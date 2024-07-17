import { Outlet, useSubmit } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Wrapper from "../components/Layout/Wrapper.jsx";
import Main from "../components/Layout/Main.jsx";
import Nav from "../components/Nav.jsx";
import { getTokenDuration } from "../utils/auth.js";

const PageContainer = ({ children }) => {
    const [headerType, setHeaderType] = useState("home");

    // loaderData
    const token = useLoaderData();
    
    const submit = useSubmit();
    useEffect(() => {
        if (!token) return;

        if (token === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post' });
        }

        const tokenDuration = getTokenDuration();
        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post' });
        }, tokenDuration);

    }, [token, submit])

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
            <Nav activePage={headerType} />
        </>
    )
}

export default PageContainer;