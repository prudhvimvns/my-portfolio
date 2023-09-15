// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <h1>Hiii</h1> */}

      <Routes>
        <Route path='/my-portfolio' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
