import { Link, NavLink, Outlet } from 'react-router-dom';

// style을 지정할 때 NavLink를 사용하면 된다.

const activeStyle = ({ isActive }) => ({
  color: isActive ? 'green' : '',
  fontSize: isActive ? '2rem' : '',
});

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* 선택한 컴포넌트에 스타일 지정이 가능하다. */}
            <NavLink to='/' style={activeStyle}>
              HOME
            </NavLink>
            {/* <a href="/">HOME</a> 와 같은 의미 */}
          </li>
          <li>
            <NavLink to='/About' style={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/Dashboard' style={activeStyle}>
              Dashboard
            </NavLink>
            {/* <a>요소는 통해서 하게 되면 전체 페이지를 렌더링 하므로 <Link> 또는 <NavLink>를 사용한다. */}
            {/* <a href='/Dashboard'>Dashboard</a> */}
          </li>
          <li>
            <NavLink to='/Main' style={activeStyle}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to='/nothing-here' style={activeStyle}>
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      {/* Outlet을 통해 자식 컴포넌트를 레이아웃화 시킬 수 있다. */}
      <Outlet />
    </div>
  );
};

export default Layout;
