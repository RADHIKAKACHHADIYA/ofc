import './App.css';
import { Routes , Route} from 'react-router-dom';
import Login from '../src/page/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
