import axios from '../../utils/https/axios/customAxios';
import DividerWithText from '../../components/DividerWitdhText.jsx';

import Button from '../../components/UI/Button.jsx';

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
      alert(JSON.stringify(res.data));
    })
    .catch(error => alert(error));
};

const LoginPage = () => {
  const blankDiv = <div className='h-7'></div>;
  return (
    <>
      <div className='oauth-container w-full'>
        {blankDiv}
        <DividerWithText text='로그인' />
        {blankDiv}
        <div className='googlelogin-btn-container container w-fit'>{/* <GoogleLoginButton /> */}</div>
        <button onClick={onGoogleLogin}>Google Login</button>
        <br />
        <button onClick={getData}>Get Data</button>
        <Button content='Google'></Button>
      </div>
    </>
  );
};
export default LoginPage;
