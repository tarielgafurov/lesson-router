import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>} />
        <Route path='users' element={<Users/>} />
        <Route path='aboutUs' element={<AboutUs/>} >
          <Route path='contact' element={<h1>+996501916791</h1>} />
        </Route>
        
      </Route>
     </Routes>
    </div>
  );
}

export default App;
