import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import { CenterWrapper } from "../../components/CenterWrapper.jsx";
import { PageInfoText } from "../../components/PageInfoText.jsx";
import usePageSetup from "../../hooks/usePageSetup.js";

export const RoutinePage = () => {
    usePageSetup("routine", CenterWrapper);
    return (
        <PageInfoText title="😢" content="루틴 페이지를 준비 중입니다." />
    )
}