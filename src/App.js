
import './App.css';
import APIDatastate from './component/APIDatastate';
import APIDataCTS from './component/APIDataCTS';
import APIDatatested from './component/APIDatatested';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
  <Menu />
  
  <Routes>
  <Route exact path='/' element={<APIDataCTS />} />
  <Route exact path='/APIDatastate' element={<APIDatastate />} />
  <Route exact path='/APIDatatested' element={<APIDatatested />} />
  </Routes>
    </div>
  );
}

export default App;
