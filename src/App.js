
import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'
import User from './pages/User';
import Protected from './components/Protected';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Protected><Home /></Protected>} />
        <Route path='/users' element={<Protected><User /></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
