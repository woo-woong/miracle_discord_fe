import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ky from 'ky';

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

export const KakaoOAuthRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const code = new URL(window.location.href).searchParams.get('code');

      if (code) {
        try {
          await ky
            .get(`${BACKEND_API_URL}/login/kakao`, {
              searchParams: { code },
              credentials: 'include',
            })
            .then(() => {
              navigate('/');
            });
        } catch (error) {
          console.error(error);
          navigate('/login');
        }
      }
    };

    fetchData();
  }, []);

  return null;
};
