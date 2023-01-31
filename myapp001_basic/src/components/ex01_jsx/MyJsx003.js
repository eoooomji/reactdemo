import "./MyJsx3.css";
import React from "react";

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      {/* jsx에서의 주석 처리 방식 */}
      {/* jsx에서는 자바스크립트 문법도 사용가능하다. */}
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      {/* jsx에서는 class 속성을 주고 싶으면 className 속성값을 입력하면 된다. */}
      <div className="line">Line Test</div>
    </>
  );
};

export default MyJsx003;
