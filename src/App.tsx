import { HashRouter, Route, Routes } from 'react-router-dom';

import { Background } from 'components/Utils/Background/Background';
import { EViewType } from 'enums/EViewType';
import Home from 'pages/Home/Home';

const App = () => (
  <>
    <Background />
    <HashRouter>
      <Routes>
        <Route element={<Home />} path={EViewType.HOME} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
