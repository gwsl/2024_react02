import React, { useEffect, useRef, useState } from 'react';

function RefTest03(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const rendCount = useRef(0);

  // 방법1
  // console.log('렌더링 수  :', rendCount.current)
  // rendCount.current = rendCount.current + 1;

  // 방법2
  // 의존성 배열이 없는 경우 : 렌더링 될 때마다 실행된다.(위에 같은것)
  // 그러나 의존성 배열을 주면 골라서 체크할 수 있다.
  useEffect(()=>{
    rendCount.current = rendCount.current + 1;
    console.log('렌더링 수  :', rendCount.current)
  });

  return (
    <div>
      <p>State : {count}</p>
      <p>State2 : {count2}</p>
      <button onClick={()=> setCount(count + 4)}>State 올려</button>
      <button onClick={()=> setCount2(count2 + 3)}>State2 올려</button>
    </div>
  );
}

export default RefTest03;