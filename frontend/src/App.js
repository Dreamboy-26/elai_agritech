import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import { Route, Routes } from 'react-router-dom';
import CountResult from './component/CountResult';

function App() {
  return (
    <div className="App">

 <Routes>
 <Route path='/'  element={ <HomePage/>}/>

  <Route path='/nextPage'  element={<CountResult/>}/>
 </Routes>
    </div>
  );
}

export default App;
