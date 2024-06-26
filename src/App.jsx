import React, { useState } from 'react';
import Home from './components/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './components/pages/datatable/DataTable';

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="datatable" element={<DataTable/>} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
