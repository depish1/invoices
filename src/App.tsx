import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';

import { EViewType } from 'enums/EViewType';
import Home from 'pages/Home/Home';
import SignIn from 'pages/Home/SignIn';
import SignUp from 'pages/Home/SignUp';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Home rightColumnComponent={<Outlet />} />} path={EViewType.HOME}>
        <Route element={<SignUp />} path={EViewType.SIGN_UP} />
        <Route element={<SignIn />} path={EViewType.SIGN_IN} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
