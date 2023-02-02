// v6
// npm install react-router-dom

import { Route, Routes } from 'react-router-dom';
import About from './components1/About';
import Dashboard from './components1/Dashboard';
import Home from './components1/Home';
import Layout from './components1/Layout';
import NoMatch from './components1/NoMatch';

const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      {/*  */}
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}

        {/* 경로가 같은 경우 index 값을 주어야 한다. */}
        {/* Layout으로 설정되어 있는 path값이 기본 설정이 되어 하위 레이아웃에는 따로 '/' 를 붙여주지 않아도 된다. */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
