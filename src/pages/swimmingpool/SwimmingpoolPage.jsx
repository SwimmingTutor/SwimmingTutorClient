import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import { PageInfoText } from "../../components/PageInfoText.jsx";
import { CenterWrapper } from "../../components/CenterWrapper.jsx";
import usePageSetup from "../../hooks/usePageSetup.js";

export const SwimmingpoolPage = () => {
    usePageSetup("swimmingpool", CenterWrapper);
    return (
        <PageInfoText title="😢" content="수영장 페이지를 준비 중입니다." />
    )
}