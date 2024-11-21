import React, { useCallback, useEffect, useState } from 'react';

function CallBackTest02(props) {
  const [number, setNumber] = useState(0);
  
  // useEffect에서 input에서 증가/감소 클릭할 때마다 리렌더링이 되면
  // someFunction 의 객체(함수)가 새로 생성 되면서 변경된 것을 감지한다.
  // const someFunction = () =>{
  //   console.log(`someFunc : number : ${number}`);
  //   return;
  // }
  
  // useCallback은 함수 자체를 저장한다.
  // 버튼을 누르면 someFunc : number : 0 나오다 이유는 useCallback 저장할 때 당시 mumber0이었다.
  const someFunction = useCallback( () =>{
    console.log(`someFunc : number : ${number}`);
    return;
  }, []);

  useEffect(() =>{
    console.log("someFunc 변경 되었네요")
  },[someFunction]);
  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>someFunction 함수 호출</button>
    </div>
  );
}

export default CallBackTest02;