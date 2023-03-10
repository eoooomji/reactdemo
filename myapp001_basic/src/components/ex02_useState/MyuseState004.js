import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-0000-0000',
  });

  const handleName = (e) => {
    // prevState : 이전에 입력되어 있는 값을 가져온다.
    /*
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
    */
    setCustomer({ ...customer, name: e.target.value });
  };

  const handleAddress = (e) => {
    setCustomer({ ...customer, address: e.target.value });
  };

  const handlePhone = (e) => {
    setCustomer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    console.log(`${customer.name} ${customer.address} ${customer.phone}`);
  };

  return (
    <div>
      {/* 값을 바꾸고 싶으면 무조건 이벤트를 입력해주어야 한다. 
          아니라면 readOnly를 적어주면 된다. */}
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
      </p>
      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>
      <p>
        <span>번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>
      <button onClick={handleCommit}>확인</button>
    </div>
  );
};

export default MyuseState004;
