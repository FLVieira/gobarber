import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const isSigned = useSelector((state) => state.auth.isLoggedIn);

  const Routes = createRouter(isSigned);

  return <Routes />;
}
