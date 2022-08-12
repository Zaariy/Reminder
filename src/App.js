import './App.css';
import Mainpage from './pages/main/mainpage'; 
import WriteNewNote from './components/createnote/pop-window';
import {BrowserRouter ,Route , Routes} from 'react-router-dom'
import ar from './data/ar.json'
import en from './data/en.json'

function App() {
  return (
     
      <BrowserRouter>
        <Routes>
        <Route exact="true"  path="/en" element={<Mainpage lang={en} />} />
        <Route path="/ar" element={<Mainpage lang={ar} />} />
        <Route path="/*" element={<Mainpage lang={en} />} />
        <Route path="/new" element={<WriteNewNote />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
