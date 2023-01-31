import { useState } from 'react';

const MyuseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);

  const [input, setInput] = useState('');

  const handleChangeName = (e) => {
    // e.target : 특정 이벤트를 가리킴
    // e.target.value : input에 입력되는 값을 의미
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    // setNames([input]); // 기존 값은 안들어가고 새로 input한 값만 들어간다.
    setNames([...names, input]);
    setInput('');
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* jsx 문법에서는 if~else, for문 사용이 안된다.
      반복해서 처리해줘야 하는 부분은 함수를 이용하여 처리해줘야 한다. */}
      {/* ()사용시 return 입력 x */}
      {/*names.map((value, index) => (
        <p key={index}>{value}</p>
      ))*/}
      {/* {}중괄호 사용시 return 입력o */}
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};

export default MyuseState003;
