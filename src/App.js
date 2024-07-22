
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Navigation from './components/landing page/Navigation';
import Login from './components/landing page/Login';
import Register from './components/landing page/Register';
import Dashboard from './components/home/Dashboard';
import Admindashboard from './components/home/Admindashboard';



function App() {
  
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="" >
        <Route path='/' element={<Register />} />
        
        <Route path="/services" element={<h1>This is services page</h1>} />
        <Route path="/contact" element={<h1>This is contact us page</h1>} />
        <Route path='/loginform' element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        
        <Route path="/home/dashboard/:username" element={<Dashboard />} />
        <Route path="/home/dashboard/admin" element={<p className='text-3xl text-center mt-6'>You are not a admin</p>} />
        <Route path="/home/dashboard/admin/:username" element={<Admindashboard />} />
        
        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
