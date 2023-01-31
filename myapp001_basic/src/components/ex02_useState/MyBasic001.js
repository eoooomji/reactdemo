const MyBasic001 = () => {
  let cnt = 0;
  let color = 'black';

  const handleClick = () => {
    cnt = cnt + 1;
    console.log(`cnt:${cnt}`);
  };

  return (
    <div>
      <p>
        {/* 리랜더링이 발생하지 않아서 출력된 화면의 숫자는 바뀌지 않는다. */}
        <span>{cnt}</span>
        <br />
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyBasic001;
