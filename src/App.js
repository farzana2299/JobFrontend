
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';

import Landing from './user/pages/Landing';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
import Auth from './company/Auth';
import UHome from './user/pages/UHome';
import CHome from './company/CHome';
import EditJob from './company/EditJob';
import AppliedJobs from './user/pages/AppliedJobs';
// import LHeader from './common/LHeader';


function App() {

  return (
    <div className="App">
  
  <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/clogin' element={<Auth></Auth>}></Route>
        <Route path='/cregister' element={<Auth register></Auth>}></Route>
        <Route path='/user-home' element={<UHome></UHome>}></Route>
        <Route path='/company-home' element={<CHome></CHome>}></Route>
        <Route path='/editjob/:id' element={<EditJob></EditJob>}></Route>
        <Route path='/appliedjob/:id' element={<AppliedJobs></AppliedJobs>}></Route>
      </Routes>

      <Footer></Footer>




      
    </div>
  );
}

export default App;
