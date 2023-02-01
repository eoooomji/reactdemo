import { useEffect, useState } from 'react';

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handleData = (e) => {
    console.log((data = data + 1));
  };

  // state값은 바뀌며 렌더링 된다.
  // 하지만 참조하는 값이 없어서 화면이 리렌더링이 발생하지 않는다.
  const handleNum = (e) => {
    // setNum(e.target.value + 1); // 11
    // setNum(parseInt(e.target.value) + 1); // 2
    setNum(num + 1);
  };

  // 변수는 리렌더링 발생 x
  // [] 처음 마운트 할 때만 렌더링
  useEffect(() => {
    console.log('data:' + data);
  }, []);

  // state는 리렌더링 발생 o
  // num값만 변경 되었을 때 리렌더링 발생
  useEffect(() => {
    console.log('num:' + num);
  }, [num]);

  return (
    <div>
      <input type='text' placeholder='data' onChange={handleData} />
      <br />
      <input type='text' placeholder='num' onChange={handleNum} />
      <br />
      <button>등록</button>
    </div>
  );
};

export default MyuseEffect002;
