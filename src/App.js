import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeSec from './Component/HomeSec';
import BookNow from './Component/BookNow';
import StallBookingData from './Component/StallBookingData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeSec />} />
          <Route path='/booknow' element={<BookNow />} />
          <Route path='/BookingData' element={<StallBookingData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;