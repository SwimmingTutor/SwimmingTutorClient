


import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogo from '../assets/icons/google-logo.svg';

const GoogleLogin = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <div onClick={() => login()} className="flex justify-center items-center gap-3 
                                                p-3 
                                                border border-zinc-300 rounded-md
                                                hover:bg-zinc-300/20
                                                font-semibold
                                                cursor-pointer
                                                ">
            <img src={GoogleLogo} alt='googleLogo' className='w-8 it object-contain' />
            Google로 계속하기
        </div>
    )
}

export const GoogleLoginButton = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin />
        </GoogleOAuthProvider>
    )

}