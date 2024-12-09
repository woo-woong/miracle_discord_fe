import { requestKakaoAuthCode } from '@/api/auth';
import kakaoLogo from '@/assets/Kakaologo.png';

export const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[300px]'>
      <button
        className='flex flex-row items-center justify-center gap-2 px-5 py-2 border-[1px] border-gray-200 rounded-lg hover:bg-gray-100'
        onClick={requestKakaoAuthCode}
      >
        <img src={kakaoLogo} alt='카카오톡 로고' className='w-10 h-10' />
        <div>카카오톡으로 시작하기</div>
      </button>
    </div>
  );
};
