
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Formpage from './Formpage';
import Appheader from './Appheader';
import Auto from './Auto';
import Comcheckbox from './Comcheckbox';
import Modalpopup from './Modalpopup';
import Muitable from './MuiTable';

function App() {
  return (
    <BrowserRouter>
    <Appheader></Appheader>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/form' element={<Formpage></Formpage>}></Route>
      <Route path='/auto' element={<Auto></Auto>}></Route>
      <Route path='/check' element={<Comcheckbox></Comcheckbox>}></Route>
      <Route path='/popup' element={<Modalpopup></Modalpopup>}></Route>
      <Route path='/table' element={<Muitable></Muitable>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
