import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Fruit from './Components/Fruit.jsx';
import Vegetable from './Components/Vegetable.jsx';
import Stationary from './Components/Stationary.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', backgroundColor: '#333' }}>
          <Link to='/' style={{ marginRight: '10px', color: '#fff' }}>Home</Link>
          <Link to='/fruit' style={{ marginRight: '10px', color: '#fff' }}>Fruits</Link>
          <Link to='/vegetable' style={{ marginRight: '10px', color: '#fff' }}>Vegetables</Link>
          <Link to='/stationary' style={{ marginRight: '10px', color: '#fff' }}>Stationary</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fruit' element={<Fruit />} />
          <Route path='/vegetable' element={<Vegetable />} />
          <Route path='/stationary' element={<Stationary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
