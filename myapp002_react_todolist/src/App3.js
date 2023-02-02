import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './CommonApi/todoApi';
import Input from './components/input3';
import Todo from './components/todo3';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';
import { Provider } from 'react-redux';
import { store } from './reduxs/store';

// 상태전달 : Redux + useSelector() + useDispatch()
function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // const baseUrl = 'http://localhost:8090';

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST 3 (Redux API)</h1>
      <Provider store={store}>
        <Input />
        {/* 리스트 출력 부분 */}
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
