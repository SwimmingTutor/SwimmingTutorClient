import { useRouteError } from 'react-router-dom';
import PageInfoText from '../components/PageInfoText.jsx';
import usePageSetup from '../hooks/usePageSetup.js';
import PageContainer from '../containers/PageContainer.jsx';

const ErrorPage = () => {
    const error = useRouteError();

    // default
    let title = '페이지 요청 실패';
    let message = '잠시 후에 다시 시도해주세요.';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = '404';
        message = '요청하신 페이지를 찾을 수 없습니다.';
    }

    return (
        <PageContainer>
            <PageInfoText title={title} content={message} />
        </PageContainer>
        
    )
}

export default ErrorPage;