
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Formpage from './Formpage';
import Appheader from './Appheader';
import Auto from './Auto';

function App() {
  return (
    <BrowserRouter>
    <Appheader></Appheader>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/form' element={<Formpage></Formpage>}></Route>
      <Route path='/auto' element={<Auto></Auto>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
