import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { PageInfoText } from '../components/PageInfoText.jsx';
import { CenterWrapper } from '../components/CenterWrapper.jsx';
import usePageSetup from '../hooks/usePageSetup.js';

export const NotFoundPage = () => {
    usePageSetup("home", CenterWrapper);
    return (
        <PageInfoText title="404" content="요청하신 페이지를 찾을 수 없습니다." />
    )
}
