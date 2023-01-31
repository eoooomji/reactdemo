import { useState } from 'react';
/**
 * React는 state가 변경이 될 때마다 레더링이 발생한다.
 * React 렌더링이 발생되면 배치로 해서 처리한다.
 * 배치 16ms 단위로 처리한다.
 * useState()는 비동기화로 처리한다.
 */
const MyuseStatesync002 = () => {
  const [number, setNumber] = useState(0);

  // 아래와 같이 콜백함수로 작성하면 작성한 코드의 값들을 순차적으로 적용시킨다.
  const handleUpNumber = () => {
    // state의 값을 순차적으로 변경할 때 콜백함수를 사용한다.
    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);
  };

  const handleDownNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>

      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync002;
