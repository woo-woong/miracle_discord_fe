import { NavigateFunction } from 'react-router-dom';
import ky from 'ky';

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
const KAKAO_API_URL = import.meta.env.VITE_KAKAO_API_URL;
const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

export const requestKakaoAuthCode = () => {
  const authUrl = `${KAKAO_API_URL}/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code&prompt=login`;
  window.location.href = authUrl;
};

export const logout = async (navigate: NavigateFunction) => {
  try {
    await ky.get(`${BACKEND_API_URL}/logout`, {
      credentials: 'include',
    });
  } catch (error) {
    console.error(error);
  } finally {
    navigate('/');
  }
};
