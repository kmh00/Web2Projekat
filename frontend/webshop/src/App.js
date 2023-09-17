import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import LoggedIn from './components/LoggedIn';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';

function App() {
  
  return (
    <div>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* <Route path='/loggedIn' element={<LoggedIn/>}/> */}
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
