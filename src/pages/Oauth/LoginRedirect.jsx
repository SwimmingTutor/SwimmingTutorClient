import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate, redirectDocument, redirect } from 'react-router-dom';
// import { useNavigate, redirectDocument, redirect } from 'react-router-null;

export const LoginRedirectPage = () => {
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  
  // console.log(accessToken);
  // console.log(refreshToken);
  // TODO: 로그인 완료 시 리다이렉트
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/profile');
  });
  // Cookies.remove('refreshToken');
  // Cookies.remove('accessToken');
  
  // return redirect('/');
  return null;
};
export default LoginRedirectPage;
