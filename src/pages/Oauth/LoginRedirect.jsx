import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate, redirectDocument, redirect } from 'react-router-dom';
// import { useNavigate, redirectDocument, redirect } from 'react-router-null;

export const LoginRedirectPage = () => {
  const navigate = useNavigate();

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  Cookies.remove('refreshToken');
  Cookies.remove('accessToken');

  const registered = Cookies.get('registered');

  if (registered === 'false') {
    localStorage.setItem('registered', false);

    return useEffect(() => {
      navigate('/accounts/register', { state: { from: '/login' } });
    });
  }

  Cookies.remove('registered');

  useEffect(() => {
    navigate('/', { state: { from: '/login' } });
  });

  return null;
};
export default LoginRedirectPage;
