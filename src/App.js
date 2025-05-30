import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeSec from './Component/HomeSec';
import BookNow from './Component/BookNow';
import StallBookingData from './Component/StallBookingData';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
     Aos.init();
  }, []);

  return (
    <>
     <div className='overflow-hidden'>

       <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeSec />} />
          <Route path='/booknow' element={<BookNow />} />
          <Route path='/BookingData' element={<StallBookingData />} />
        </Routes>
      </BrowserRouter>
     </div>
    </>
  );
}

export default App;