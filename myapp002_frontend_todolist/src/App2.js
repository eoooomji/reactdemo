import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/input2';
import Todo from './components/todo2';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';

// 상태전달 : Context API + useContext

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  let boardList = [
    { id: 1, todoname: '운동하기', completed: 0 },
    { id: 2, todoname: 'SNS꾸미기', completed: 0 },
    { id: 3, todoname: '사진정리하기', completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);

  const [input, setInput] = useState('');

  const insertTodo = (e) => {
    // form 형식의 기본 action은 '#'이다. 이벤트가 발생되지 않도록 preventDefault()를 작성한다.
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: 0 },
    ]);
    setInput('');
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST 2</h1>
      <InputContext.Provider value={{ input, insertTodo, handleChangeText }}>
        <Input />
      </InputContext.Provider>
      {/* 리스트 출력 부분 */}
      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
