import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Background } from 'components/Utils/Background/Background';
import { EViewType } from 'enums/EViewType';
import Home from 'pages/Home/Home';
import InvoicesList from 'pages/InvoicesList/InvoicesList';

const App = () => (
  <>
    <Background />
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={`/${EViewType.HOME}`} />
        <Route element={<InvoicesList />} path={`/${EViewType.INVOICES_LIST}`} />
        <Route element={<Navigate replace to={`/${EViewType.HOME}`} />} path="/" />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
