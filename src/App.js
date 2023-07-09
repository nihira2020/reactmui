
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Formpage from './Formpage';
import Appheader from './Appheader';
import Auto from './Auto';
import Comcheckbox from './Comcheckbox';
import Modalpopup from './Modalpopup';
import Muitable from './MuiTable';
import Floatingbutton from './Flatingbutton';
import Ratingctl from './Ratingctl';
import Alertpage from './AlertPage';

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
      <Route path='/fab' element={<Floatingbutton></Floatingbutton>}></Route>
      <Route path='/rating' element={<Ratingctl></Ratingctl>}></Route>
      <Route path='/alert' element={<Alertpage></Alertpage>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
