import axios from '../../utils/https/axios/customAxios';
import DividerWithText from '../../components/DividerWitdhText.jsx';
import Button from '../../components/UI/Button.jsx';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
import logo from '../../assets/images/g-logo.png';

const onGoogleLogin = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google';
};

const getData = async () => {
  await axios
    .get('level/log', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error));
};

const LoginPage = () => {
  const blankDiv1 = <div className='h-10'></div>;
  const blankDiv2 = <div className='h-40'></div>;
  const content = `Google`;

  return (
    <CenterWrapper>
      {blankDiv2}
      <div className='flex flex-col items-center justify-center'>
        <div className='oauth-container flex w-full flex-col items-center justify-center'>
          <div className='relative flex w-[300px] items-center justify-center rounded-full bg-white p-4 shadow-lg'>
            <span className='text-sm font-bold text-blue-900'>
              지금, 당신만의 수영쌤을 만나세요 &nbsp;&nbsp;&nbsp;🏊‍♂️
            </span>
            <div className='absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-8 border-r-8 border-t-8 border-transparent border-t-white'></div>
          </div>
          {blankDiv1}
          <Button content={content} type='cancel' onClick={onGoogleLogin} img={logo} size='custom'></Button>
        </div>
      </div>
    </CenterWrapper>
  );
};

export default LoginPage;
