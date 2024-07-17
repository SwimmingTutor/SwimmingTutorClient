import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

// import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import GoogleLogo from '../assets/icons/google-logo.svg';

// const GoogleLogin = () => {
//   const login = useGoogleLogin({
//     onSuccess: tokenResponse => console.log(tokenResponse)
//   });

//   return (
//     <div
//       onClick={() => login()}
//       className='flex cursor-pointer items-center justify-center
//                                                 gap-3
//                                                 rounded-md border border-zinc-300
//                                                 p-3
//                                                 font-semibold
//                                                 hover:bg-zinc-300/20
//                                                 '
//     >
//       <img src={GoogleLogo} alt='googleLogo' className='it w-8 object-contain' />
//       Google로 계속하기
//     </div>
//   );
// };

// const GoogleLoginButton = () => {
//   const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <GoogleLogin />
//     </GoogleOAuthProvider>
//   );
// };

default GoogleLoginButton;