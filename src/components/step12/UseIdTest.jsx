import React, { useEffect, useId, useRef } from 'react';

// useId 란 고유한 ID를 생성한다.
function UseIdTest(props) {
  const id = useId();
  const inputRef = useRef([]);
  
  // const age = useId();
  // const ageRef = useRef();

  useEffect(()=>{
    // 가져올 수 없다. (useRef 사용)
    // const element = document.querySelector(id);
    // console.log(element);

    const element1 = inputRef.current[0];
    const element2 = inputRef.current[1];
    console.log(element1);
    console.log(element2);

    // const element2 = ageRef.current;
    // console.log(element2);
  },[]);
  return (
    <div>
      {/* <label htmlFor={id}>이름</label>
      <input id={id} ref={inputRef} /> */}

      {/* 만약 여러개일 경우 */}
      {/* <label htmlFor={id}>나이</label>
      <input id={age} ref={ageRef} /> */}

      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} ref={el => (inputRef.current[0] = el)} />

      <label htmlFor={`${id}-age`}>나이</label>
      <input id={`${id}-age`} ref={el => (inputRef.current[1] = el)} />

    </div>
  );
}

export default UseIdTest;