import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './CommonApi/todoApi';

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // const baseUrl = 'http://localhost:8090';

  let boardList = [
    { id: 1, todoname: '운동하기', completed: 0 },
    { id: 2, todoname: 'SNS꾸미기', completed: 0 },
    { id: 3, todoname: '사진정리하기', completed: 0 },
  ];

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  // DB작업 - npm install axios (설치)
  // react는 기본적으로 비동기화. axios또한 외부에서 접근하여도 비동기화로 처리된다.
  // 한 구역만 동기화로 구현을 하기 위해 async와 await를 적용시킨다.
  async function getTodos() {
    // axios.호출방식(호출할 url)
    await axios
      .get(baseUrl + '/todo/all')
      .then((response) => {
        // console.log(response.data);
        console.log('1111111111111111');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('222222222222222');
  }

  const insertTodo = async (e) => {
    // form 형식의 기본 action은 '#'이다. 이벤트가 발생되지 않도록 preventDefault()를 작성한다.
    e.preventDefault();
    // setTodos([
    //   ...todos,
    //   { id: todos.length + 1, todoname: input, completed: 0 },
    // ]);

    await axios
      .post(baseUrl + '/todo', { todoname: input })
      .then((response) => {
        console.log(response.date);
        setInput('');
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });

    setInput('');

    console.log('할일이 추가됨!');
    alert('할일 추가!!');
  };

  const updateTodo = async (id, completed) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id
    //       ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
    //       : todo
    //   )
    // );

    // 수정 완료 되면 현재 todos에 해당되는 id값만 바꿔주면 된다.
    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
              : todo
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );

    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        setTodos(
          todos.filter((todo) => {
            return todo.id !== id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        <input type='submit' value='Create' />
      </form>
      {/* 리스트 출력 부분 */}
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? 'completed' : null}
                    onClick={() => updateTodo(todo.id, todo.completed)}
                  >
                    {todo.todoname}
                  </label>
                  <label onClick={() => deleteTodo(todo.id)}>
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
