import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeSec from './Component/HomeSec';
import BookNow from './Component/BookNow';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeSec />} />
          <Route path='/booknow' element={<BookNow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;