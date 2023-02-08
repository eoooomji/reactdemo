import { NavLink, Outlet } from 'react-router-dom';

function BaseLayout() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? 'green' : '',
    fontsize: isActive ? '1.2rem' : '',
  });

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink style={activeStyle} className='nav-link' to='/'>
                HOME
              </NavLink>
            </li>

            {localStorage.getItem('username') === null ? (
              <>
                <li className='nav-item'>
                  {/* NavLink, Link 내부에는 파라미터 값을 못 넘긴다. */}
                  <NavLink style={activeStyle} className='nav-link' to='/login'>
                    LOGIN
                  </NavLink>
                </li>

                <li className='nav-item'>
                  {/* NavLink, Link 내부에는 파라미터 값을 못 넘긴다. */}
                  <NavLink style={activeStyle} className='nav-link' to='/join'>
                    JOIN
                  </NavLink>
                </li>
              </>
            ) : (
              <li className='nav-item'>
                {/* NavLink, Link 내부에는 파라미터 값을 못 넘긴다. */}
                <NavLink style={activeStyle} className='nav-link' to='/logout'>
                  {localStorage.getItem('username') + ' LOGOUT'}
                </NavLink>
              </li>
            )}

            <li className='nav-item'>
              {/* NavLink, Link 내부에는 파라미터 값을 못 넘긴다. */}
              <NavLink style={activeStyle} className='nav-link' to='/board'>
                BOARD
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default BaseLayout;
