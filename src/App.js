import './App.css';
import { Routes , Route} from 'react-router-dom';
import LoginPage from './Login_page/LoginPage';
import ToogleBtn from './context/toogleBtn';
// import Login from '../src/page/Login';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route  path='/login' element={<LoginPage/>}/>
        <Route  path='/theme' element={<ToogleBtn/>}/>
      </Routes>

    </div>
  );
}

export default App;
