import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
            {/* <a href="/">HOME</a> 와 같은 의미 */}
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Dashboard'>Dashboard</Link>
            {/* <a>요소는 통해서 하게 되면 전체 페이지를 렌더링 하므로 <Link> 또는 <NavLink>를 사용한다. */}
            {/* <a href='/Dashboard'>Dashboard</a> */}
          </li>
          <li>
            <Link to='/nothing-here'>Nothing Here</Link>
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
