import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Main from './pages/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}/>
      </Routes>
    </Router>

  );
}

export default App;
