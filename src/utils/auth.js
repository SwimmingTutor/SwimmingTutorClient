import { redirect, useNavigate } from 'react-router-dom'

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime(); // 남은 시간(토큰 만료==음수, 유효==양수)
    return duration;
}

export function getAuthToken() { // return [ null, 'EXPIRED, token ]
    const token = localStorage.getItem('token');
    if (!token) return null;

    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) return 'EXPIRED';

    return token;
}

export function tokenLoader() { // 토큰 확인, 유효성 검사
    return getAuthToken();
}

export function checkAuthLoader() { // 인증이 필요한 라우트 보호하기 위한 함수
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}