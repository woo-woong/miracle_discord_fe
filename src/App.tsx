import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { KakaoOAuthRedirectPage } from '@/pages/KakaoOAuthRedirectPage';

const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;
function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path={new URL(KAKAO_REDIRECT_URL).pathname} element={<KakaoOAuthRedirectPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
