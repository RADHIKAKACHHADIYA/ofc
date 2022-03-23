import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login_page/LoginPage';
import Context from './context/context';
import Context1 from './context/context_1';
import Context2 from './context/context_2';

function App() {
  return (
    <div>
      <Context>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/context' element={<Context />} />
          <Route path='/context1' element={<Context1 />} />
          <Route path='/context2' element={<Context2 />} />
        </Routes>
      </Context>
    </div>
  );
}

export default App;
