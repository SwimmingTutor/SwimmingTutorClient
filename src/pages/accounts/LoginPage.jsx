import { DividerWithText } from "../../components/DividerWitdhText.jsx"
import { GoogleLoginButton } from "../../components/GoogleLoginButton.jsx"

export const LoginPage = () => {
    const blankDiv = <div className="h-7" ></div>;
    return (
        <>
            <div className="oauth-container w-full">
                {blankDiv}
                <DividerWithText text="로그인"/>
                {blankDiv}
                <div className="googlelogin-btn-container container w-fit">
                    <GoogleLoginButton />
                </div>
            </div>
        </>
    )
}