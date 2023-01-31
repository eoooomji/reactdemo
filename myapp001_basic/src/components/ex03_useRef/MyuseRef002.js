import { useEffect, useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    nameRef.current.value = '';
  };

  // 렌더링이 다 발생한 후에 마지막으로 실행된다.
  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
