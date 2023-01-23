import './App.css';
import Header from './component/Header';
import Cards from './component/Cards'
import { Route,Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import ShortList from './component/ShortList';
import Invalid from './component/Invalid';
import Details from './component/Details';
import { AuthProvider } from './component/auth';

function App() {
  return (
    <div>
      <Header/>
      {/* <Cards /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Listing" element={<Cards/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path='/ShortList/:id' element={<ShortList/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
        <Route path="*" element={<Invalid/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
