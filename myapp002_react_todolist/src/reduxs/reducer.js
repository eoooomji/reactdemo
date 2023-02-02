// fuction reducer(state, action){}

import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../CommonApi/todoApi';

function Board() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    // axios.호출방식(호출할 url)
    await axios
      .get(baseUrl + '/todo/all')
      .then((response) => {
        console.log(response.data);
        console.log('1111111111111111');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('222222222222222');
  }
}

export const reducer = (todos = Board(), action) => {
  switch (action.type) {
    // 추가
    case 'INSERT':
      return [
        ...todos,
        { id: todos.length + 1, todoname: action.todoname, completed: 0 },
      ];
    // 업데이트
    case 'UPDATE':
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      );
    // 삭제
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.id);
    // 목록
    default:
      return todos;
  }
};
