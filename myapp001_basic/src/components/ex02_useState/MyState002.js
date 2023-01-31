import { useState } from 'react';

const MyBasic002 = () => {
  // const [상태, 변경함수] = useState(초기값)
  // 특정 부분만 리랜더링 된다.
  const [cnt, setCnt] = useState(0);

  const handleClick = (e) => {
    // preventDefault : 페이지 이동 및 form형식의 데이터 전송 동작을 중단시킨다.
    e.preventDefault();
    setCnt(cnt + 1);
  };

  return (
    <div>
      <span>cnt : {cnt}</span>
      <br />
      <button onClick={handleClick}>CNT UPDATE</button>
    </div>
  );
};

export default MyBasic002;
