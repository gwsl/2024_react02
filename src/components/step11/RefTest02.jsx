import React, { useRef, useState } from 'react';

function RefTest02(props) {
  const [render, setRender] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const doRender = () => {
    setRender(render+1);
  }


  const refUp = () => {
    countRef.current = countRef.current + 1;
    console.log('ref :' , countRef.current)
  }
  const varUp = () => {
    countVar += 1;
    console.log('Var : ', countVar)
  }
  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>var : {countVar}</p>
      {/* 둘다 렌더링이 안된다. 
          그래서 렌더링 버튼을 만들어 실행하면, ref는 값을 가지고 있으나, var는 렌더링 할때 초기화 되서 0이 된다.
      */}
      <button onClick={refUp}>Ref 올리기</button>
      <button onClick={varUp}>Var 올리기</button>
      <button onClick={doRender}>렌더링 하자</button>
      <button onClick={printResult}>결과 출력</button>
    </div>
  );
}

export default RefTest02;