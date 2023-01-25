import './App.css';
import Header from './component/layout/Header';
import Cards from './component/listing/Cards'
import { Route,Routes } from 'react-router-dom';
import Login from './component/user/Login';
import Signup from './component/user/Signup';
import Home from './component/layout/Home';
import ShortList from './component/listing/ShortList';
import Invalid from './component/Invalid';
import Details from './component/listing/Details';

function App() {
  return (
    <div>
      <Header/>
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