// fuction reducer(state, action){}

let boardList = [
  { id: 1, todoname: '운동하기', completed: 0 },
  { id: 2, todoname: 'SNS꾸미기', completed: 0 },
  { id: 3, todoname: '사진정리하기', completed: 0 },
];

export const reducer = (todos = boardList, action) => {
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
