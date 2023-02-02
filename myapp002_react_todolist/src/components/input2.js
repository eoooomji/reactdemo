import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';

const Input = () => {
  // 값이 아닌 주소가 넘어온다.
  const { input, insertTodo, handleChangeText } = useContext(InputContext);

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
