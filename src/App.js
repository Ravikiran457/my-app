import './App.css';
import SchoolHome from './Components/SchoolHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<SchoolHome />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
