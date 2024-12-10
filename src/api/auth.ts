const KAKAO_API_URL = import.meta.env.VITE_KAKAO_API_URL;
const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

export const requestKakaoAuthCode = () => {
  const authUrl = `${KAKAO_API_URL}/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code&prompt=login`;
  window.location.href = authUrl;
};
