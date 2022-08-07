import './App.css';
import Mainpage from './pages/main/mainpage'; 
import {BrowserRouter ,Route , Routes} from 'react-router-dom'

function App() {
  return (
     
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/dashboard" element={<Mainpage />} />
        <Route path="/*" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
