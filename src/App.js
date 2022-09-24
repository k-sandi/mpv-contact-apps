import './App.css';
import {Route, Routes} from 'react-router-dom';


import ContactApps from './views/ContactApss';
import DetailContact from './views/DetailContact';
import CategoryContact from './views/CategoryContact';
import NotFound from './views/NotFound';

// components
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ContactApps/>} />
        <Route path='/category/:category' element={<CategoryContact/>} />
        <Route path='/detail/:id' element={<DetailContact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>    
  );
}

export default App;
