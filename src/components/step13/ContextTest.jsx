import React, { useState } from 'react';
import Page from './Page';
import './ContextTest.css';

// React Context : 컴포넌트 계층구조 전체에서 데이터를 전달할 때 여러단계의 Props 전달을 피하기 위한 방법
//                  즉, 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때, Props를 거치지 않고 데이터 공유
// 주요 사용 : 테마, 사용자 인증, 다국어 지원
// 단점 : Context 값이 변경되면, 모든 하위 컴포넌트가 재렌더링 되어야 한다. 성능 저하
//        복잡한 상태 관리에는 부적절, 디버깅이 어렵다.

// 실행 순서 : 1.src-context 폴더안에 XXXContext 파일 생성
//            2. data를 보내고자하는 컴포넌트 최상위 컴포넌트를 XXXContext.Provider로 감싼다.
function ContextTest(props) {
  const [isDark, setIsDark] = useState(false)
  return (
    <div>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default ContextTest;