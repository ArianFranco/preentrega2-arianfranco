import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Detail from './pages/Home/Detail/Detail';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='*' element={<Error />}/>
      <Route path='/' element={<Home />} />
      <Route path='detail' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
