import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import routes from './router/index.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((e) => {
            return (
              <Route key={e.path} path={e.path} element={<e.Component></e.Component>} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
