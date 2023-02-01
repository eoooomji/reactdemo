const Label = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div>
      <h3>
        <label
          className={todo.completed ? 'completed' : null}
          onClick={updateTodo}
        >
          {todo.todoname}
        </label>
        <label onClick={deleteTodo}>&nbsp;&nbsp;삭제</label>
      </h3>
    </div>
  );
};

export default Label;
