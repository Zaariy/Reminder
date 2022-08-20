import './App.css';
import Mainpage from './pages/main/mainpage'; 
import {BrowserRouter ,Route , Routes} from 'react-router-dom'
import en from './data/en.json'

function App() {
  return (
     
      <BrowserRouter>
        <Routes>
        <Route exact={true}  path="/" element={<Mainpage lang={en} path={'dashboard'} />} />
        <Route   path="/dashboard" element={<Mainpage lang={en} path={'dashboard'} />} />
        <Route   path="/*" element={<Mainpage lang={en} path={'dashboard'} />} />
        <Route   path="/taskes" element={<Mainpage lang={en} path={'taskes'} />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
