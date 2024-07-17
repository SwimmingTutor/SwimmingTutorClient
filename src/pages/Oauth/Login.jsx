import axios from 'axios';
import DividerWithText from '../../components/DividerWitdhText.jsx';

import Button from '../../components/UI/Button.jsx';

const onGoogleLogin = () => {
  window.location.href = 'http://localhost:8615/oauth2/authorization/google';
};

const getData = () => {
  axios
    .get('http://localhost:8615/my', { withCredentials: true })
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