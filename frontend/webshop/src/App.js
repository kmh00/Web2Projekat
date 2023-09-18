import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import CustomerDashboard from './components/customer/CustomerDashboard';
import SellerDashboard from './components/seller/SellerDashboard';
import Profile from './components/Profile';

function App() {
  
  return (
    <div>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/customerDashboard' element={<CustomerDashboard/>}/>
      <Route path='/sellerDashboard' element={<SellerDashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
