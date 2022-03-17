import './App.css';
import { Routes , Route} from 'react-router-dom';
import LoginPage from './Login_page/LoginPage';
// import Login from '../src/page/Login';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route  path='/login' element={<LoginPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
