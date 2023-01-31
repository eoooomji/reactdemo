import { useEffect, useState } from 'react';
/**
 * useEffect : 컴포넌트가 렌더링될 떄마다 특정 작업을 수행하도록 설정한다.
 *
 * 특정작업(side effecti) - 비동기화 : Time(setTimeout), Ajax
 *
 * 마운트 : 처음 나타냈을 때 / 언마운트 : 사라질 때(종료될 떄)
 *
 * useEffect : useEffect는 side effect라는 뜻이다.
 * useEffect 4가지 종류
 * 1. useEffect(callback) : 마운트 후, 리렌더링 될때마다
 * 2. useEffect(callback, []) : 마운트 후
 * 3. useEffect(callback, [state]) : 마운트 후, state
 * 4. useEffect(callback() {return();}, []) : 마운트 후, 언마운트 전
 */

const MyuseEffect001 = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickName(e.target.value);
  };

  useEffect(() => {
    console.log('렌더링이 되었습니다.');
  });

  useEffect(() => {
    console.log('렌더링 Name:' + name);
  }, [name]);

  useEffect(() => {
    console.log('렌더링 NickName:' + nickName);
  }, [nickName]);

  useEffect(() => {
    //console.log(`렌더링 Name : ${name}, NickName: ${nickName}`);
    console.log('렌더링 Name : ' + name + ', NickName : ' + nickName);
  }, [name, nickName]);

  // 언마운트 되기 전에 실행되며 렌더링된다.
  useEffect(() => {
    console.log('렌더링 return:' + name);
    return () => {
      console.log('clean up');
    };
  }, [name]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={name}
          onChange={onChangeName}
          placeholder='name'
        />
        <br />
        <input
          type='text'
          value={nickName}
          onChange={onChangeNickname}
          placeholder='nickname'
        />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickName}
      </div>
    </div>
  );
};
export default MyuseEffect001;
