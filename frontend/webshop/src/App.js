import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import CustomerDashboard from './components/customer/CustomerDashboard';
import SellerDashboard from './components/seller/SellerDashboard';
import Verification from './components/admin/Verification'
import AddNewItem from './components/seller/AddNewItem';
import Profile from './components/Profile';
import NewOrder from './components/customer/NewOrder';

function App() {
  
  return (
    <div>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/verification' element={<Verification/>}/>
      <Route path='/customerDashboard' element={<CustomerDashboard/>}/>
      <Route path='/newOrder' element={<NewOrder/>}/>
      <Route path='/sellerDashboard' element={<SellerDashboard/>}/>
      <Route path='/addNewItem' element={<AddNewItem/>}/>
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
