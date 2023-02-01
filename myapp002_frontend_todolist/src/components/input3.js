import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Input = () => {
  // 값이 아닌 주소가 넘어온다.
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const insertTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'INSERT', todoname: input });
    setInput('');
  };

  const handleChangeText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={insertTodo}>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        &nbsp;
        <input type='submit' value='Create' />
      </form>
    </>
  );
};

export default Input;
