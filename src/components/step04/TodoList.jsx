import React, { useState } from 'react';
import './todoList.css'
import { Button, TextField } from '@mui/material';

function TodoList(props) {
  const [todos, setTodos] = useState(['Learn React','Build a Project'])
  const deleteTodo = (index)=>{
    // (_,i) => filter 메서드의 콜백 함수 매개변수
    // 첫번째 매게변수 '_' 는 배열의 각 요소를 의미(지금은 사용하지 않을 때)
    // 두번째  매게변수 i 는 인덱스를 의미한다. 
    setTodos(todos.filter((_,i)=>i !== index));
  }
  
  return (
    <div className='center'>
      <h2>Todo List</h2>
      <ul>
      {/* <li>Learn React {''}
      <Button variant="outlined">
        Delete
      </Button>
      </li> */}
        {todos.map((k, index) =>(
          <li key={index}>
            {k} {''}
          <Button variant="outlined" onClick={()=> deleteTodo(index)}>
          Delete
          </Button>
          </li>
        ))}
      </ul>
      <p> Typing : </p>
      <input
        type='text'
        value
        onChange
      />{''}
      <button onClick > Add New Task</button>
    </div>
  );
}

export default TodoList;