import React, { useEffect, useRef, useState } from 'react';

function RefTest04(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const rendCount = useRef(0);
  // const btn1 = useRef(0);
  // const btn2 = useRef(0);

  // useEffect(()=>{
  //   btn1.current += 1 ;
  //   console.log(btn1.current);
  // },[count1]);
  // useEffect(()=>{
  //   btn2.current += 1;
  // },[count2]);

  useEffect(() => {
    console.log(rendCount.current);
    rendCount.current += 1;
  },[count]);

  return (
    <div>
      <p>State : {count}</p>
      <p>버튼1 클릭횟수 : {count1}</p>
      <p>버튼2 클릭횟수 : {count2}</p>
      <p>전체 클릭횟수 : {rendCount.current}</p>
      <button onClick={()=> {setCount(count + 4);
         setCount1(count1 + 1)}}>버튼1(+4)</button>
      <button onClick={()=> {setCount(count + 3);
         setCount2(count2 + 1)}}>버튼2(+3)</button>
    </div>
  );
}

export default RefTest04;