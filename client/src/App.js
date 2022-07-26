import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeeperSearch from './pages/KeeperSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<KeeperSearch />} path="/" />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
