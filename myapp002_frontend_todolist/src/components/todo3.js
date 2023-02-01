import { useDispatch, useSelector } from 'react-redux';
import Label from './label3';

const Todo = () => {
  // Store에 저장된 값을 가져올 때 useSelectort를 이용하면 된다.
  const todos = useSelector((todos) => todos);

  const dispatch = useDispatch();

  const updateTodo = (id) => {
    dispatch({ type: 'UPDATE', id: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', id: id });
  };

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={() => updateTodo(todo.id)}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
