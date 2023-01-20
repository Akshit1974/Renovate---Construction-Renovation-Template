import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newnavbar from './Componates/Newnavbar';
import Tophedaer from './Componates/Top-header';
import Fixbutton from './Componates/Fixbutton';
import { Routes, Route, Link } from 'react-router-dom';
import Services from './Componates/Services';
import Home from './Componates/Home';


function App() {
  return (
    <>
      <Tophedaer />
      <Newnavbar title="RENOVATE" project="PROJECTS" />
      <Fixbutton />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Services' element={<Services />}></Route>
      </Routes>
      
      {/* <Contant />
      <Ourservices />
      <Recentprojects />
      <Footer /> */}
    </>
  );
}

export default App;