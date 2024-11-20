import React, { useState } from 'react';
import './todoList.css'
import { Button} from '@mui/material';

function TodoList(props) {
  const [todos, setTodos] = useState(['Learn React','Build a Project'])
  const [newTodo, setNewTodo] = useState('')
  // 리스트에서 삭제
  const deleteTodo = (index)=>{
    // (_,i) => filter 메서드의 콜백 함수 매개변수
    // 첫번째 매게변수 '_' 는 배열의 각 요소를 의미(지금은 사용하지 않을 때)
    // 두번째  매게변수 i 는 인덱스를 의미한다. 
    setTodos(todos.filter((_,i)=>i !== index));
  }

  // 리스트 추가
  const addTodo = () => {
    if(newTodo.trim !== ''){
      // 기존 todos 배열에 새로운 newTodo를 추가한다
      setTodos([...todos, newTodo.trim()])
      setNewTodo('');
    }
  }

  return (
    <div className='center'>
      <h2>Todo List</h2>
      <ul>
      {/* <li>Learn React &nbsp;&nbsp;
      <Button variant="outlined">
        Delete
      </Button>
      </li> */}
        {todos.map((k, index) =>(
          <li key={index}>
            {k} &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" onClick={()=> deleteTodo(index)}>
          Delete
          </Button>
          </li>
        ))}
      </ul>
      <p> Typing : {newTodo} </p>
      <input
        type='text'
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addTodo} > Add New Task</button>
    </div>
  );
}

export default TodoList;