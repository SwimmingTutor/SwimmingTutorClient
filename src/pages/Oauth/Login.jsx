import Button from '../../components/UI/Button.jsx';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
import logo from '../../assets/images/g-logo.png';
import BLANKDIV from '../../constants/blankDiv.js';

const onGoogleLogin = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  if (!apiUrl) {
    console.error('API URL이 설정되지 않았습니다.');
    return;
  }
  window.location.href = `${apiUrl}/oauth2/authorization/google`;
};

const LoginPage = () => {
  const content = `Google`;

  return (
    <CenterWrapper>
      {BLANKDIV[10]}
      <div className='flex flex-col items-center justify-center'>
        <div className='oauth-container flex w-full flex-col items-center justify-center'>
          <div className='relative flex w-[300px] items-center justify-center rounded-full bg-white p-4 shadow-lg'>
            <span className='text-sm font-bold text-blue-900'>
              지금, 당신만의 수영쌤을 만나세요 &nbsp;&nbsp;&nbsp;🏊‍♂️
            </span>
            <div className='absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-8 border-r-8 border-t-8 border-transparent border-t-white'></div>
          </div>
          {BLANKDIV[7]}
          <Button content={content} type='cancel' onClick={onGoogleLogin} img={logo} size='custom'></Button>
        </div>
      </div>
    </CenterWrapper>
  );
};

export default LoginPage;
