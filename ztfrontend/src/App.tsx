import React from 'react';

import './App.css';
import SidebarLayout from './layouts/SidebarLayout';
import { useRoutes } from 'react-router';
import routes from './routes/Routes';

function App() {
  const content = useRoutes(routes);
  return (
    <>
      {content}
    </>
  );
}

export default App;
