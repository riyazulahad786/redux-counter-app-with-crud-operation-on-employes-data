import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Redux from './components/Redux';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import EditEmployees from './components/EditEmployees';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
 
      <Navbar/>
    <Router>
      <Routes>
      <Route path="/create" element={<AddEmployee/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/editEmployeesDetails' element={<EditEmployees/>}/>
      </Routes>
    </Router>
      {/* working code sample for redux app */}
       {/* <Redux/>  */}
    </div>
  );
}

export default App;
