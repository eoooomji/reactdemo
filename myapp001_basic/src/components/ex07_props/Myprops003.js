// 객체를 이용하여 값을 지정하면 쉼표(,)를 입력해야 한다.
const Myprops003 = ({ name = '아무개', age = '30', loc = '경기도' }) => {
  return (
    <div>
      <p>
        고객님 이름 : {name} / 나이 : {age} / 지역 : {loc}
      </p>
    </div>
  );
};

export default Myprops003;
