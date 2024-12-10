import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ky from 'ky';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const KakaoOAuthRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (code) {
        try {
          await ky
            .get(`${BACKEND_URL}/login/kakao`, {
              searchParams: { code },
            })
            .then((res) => {
              const token = res.headers.get('jwt');
              if (token) {
                localStorage.setItem('token', token);
                navigate('/');
              }
            });
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return null;
};
