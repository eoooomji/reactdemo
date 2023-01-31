import { useRef, useState } from 'react';
/**
 * state : state 변경 > 리렌더링 발생 > state 초기화 안됨
 * ref : ref 변경 > 리렌더링 발생이 안됨 > ref 초기화 안됨
 * variable : variable > 리렌더링 발생이 안됨 > variable 초기화 됨
 *
 * 리렌더링 발생(컴포넌트 업데이트)
 * 1. state가 바뀔 때
 * 2. props가 바뀔 떄
 * 3. 부모 컴포넌트가 리렌더링 될 떄
 * 4. foreUpdate()로 강제로 렌더링을 트리거할 떄
 *
 * useRef()
 * 1. 상태정보
 * 2. DOM 접근
 *
 * DOM을 꼭 사용해야 하는 경우
 * 1. 특정 input에 포커스 주기
 * 2. 스크롤 박스 조작하기
 * 3. Canvas 요소에 그림 그리기 등
 */
const MyuseRef001 = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  let countLet = 0;

  const upCountState = () => {
    setCount(count + 1);
  };

  // ref는 값은 변경 되지만 리렌더링이 되지 않는다.
  const upCountRef = () => {
    console.log((countRef.current = countRef.current + 1));
  };

  const upCountLet = () => {
    console.log((countLet = countLet + 1));
  };

  return (
    <div>
      <p>State:{count}</p>
      <p>Ref:{countRef.current}</p>
      <p>Let:{countLet}</p>

      <button onClick={upCountState}>State</button>
      <br />
      <button onClick={upCountRef}>Ref</button>
      <br />
      <button onClick={upCountLet}>Let</button>
    </div>
  );
};

export default MyuseRef001;
