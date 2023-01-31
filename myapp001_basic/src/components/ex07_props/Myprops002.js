// 요소 안에 속성으로 값을 주어서 쉼표(,)가 필요 없다.
const Myprops002 = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        고객님 이름 : {props.name} / 나이 : {props.age} / 지역 : {props.loc}
      </p>
    </div>
  );
};

export default Myprops002;
