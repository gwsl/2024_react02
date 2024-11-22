import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

// 실행 순서 : context 폴더안에 XXXContext 파일 생성
//
function Page({isDark, setIsDark}) {
  
  return (
    <div className='page'>
      <Header isDark={isDark} />
      <Main isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Page;