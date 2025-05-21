import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeSec from './Component/HomeSec';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomeSec/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;