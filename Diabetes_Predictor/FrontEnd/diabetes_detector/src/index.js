import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Input_Form from './Component/Form/Input_Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Input_Form/>}></Route>
    </Routes>
  </BrowserRouter>
);