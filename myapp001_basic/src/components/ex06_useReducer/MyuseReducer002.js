import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.check) {
    case 'name':
      return { name: action.type };
    case 'nickName':
      return { nickName: action.type };
    default:
      return { state };
  }
}

const MyuseReducer002 = () => {
  /*
  // state활용
  const [name, setName] = useState('');

  const [nickname, setNickName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickName(e.target.value);
  };
  */

  const [state, dispatch] = useReducer(reducer, { name: '', nickName: '' });

  // 구조 분해 할당
  const { name, nickName } = state;

  const onChange = (e) => {
    dispatch({ check: e.target.name, type: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          type='text'
          name='name'
          placeholder='name'
          // onChange={onChangeName}
          onChange={onChange}
        />
        <br />
        <input
          type='text'
          name='nickName'
          placeholder='nickName'
          // onChange={onChangeNickname}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름: </b> {name} {/*state.name*/}
      </div>
      <div>
        <b>닉네임: </b> {nickName} {/*state.nickName*/}
      </div>
    </div>
  );
};

export default MyuseReducer002;
