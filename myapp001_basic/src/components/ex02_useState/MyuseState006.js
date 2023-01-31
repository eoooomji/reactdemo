import { useRef, useState } from 'react';

// useRef, useState
const MyuseState006 = () => {
  const inputRef = useRef(null);

  const [input, setInput] = useState('');

  const [userList, setUserList] = useState([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const pushNewUser = (e) => {
    //setUserList([...userList, { id: userList.length + 1, name: input }]);
    //setInput('');

    // useRef > current.value : 입력된 값을 가져온다. target.value 필요 없음
    console.log(inputRef);
    setUserList([
      ...userList,
      { id: userList.length + 1, name: inputRef.current.value },
    ]);
  };

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
        style={{ display: 'block' }}
        id='fname'
        value={input}
        onChange={handleChange}
      />
      <button onClick={pushNewUser} style={{ display: 'block' }}>
        등록
      </button>
      {userList.map((element, idx) => {
        return (
          <p key={idx}>
            <span>{element.id}</span>
            <br />
            <span>{element.name}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MyuseState006;
