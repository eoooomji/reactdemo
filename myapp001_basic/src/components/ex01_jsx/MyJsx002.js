import React, { Fragment } from "react";

const MyJsx002 = () => {
  return (
    // 단순히 요소를 묶는 용도로 사용한다면 div 대신 Fragment를 사용하면 된다.
    //<Fragment>
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    //</Fragment>
  );
};

export default MyJsx002;
