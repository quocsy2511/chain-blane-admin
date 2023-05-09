
import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
import User from './pages/User';
import Protected from './components/Protected';
import DetailError from './components/DetailError';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Protected><Home /></Protected>} />
        <Route path='/users' element={<Protected><User /></Protected>} />
        <Route path='/error/:oid' element={<Protected><DetailError /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
