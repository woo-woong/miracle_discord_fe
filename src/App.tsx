import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
