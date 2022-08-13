import Index from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KeeperSearch from './pages/KeeperSearch';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Index />

        <Routes>
          <Route element={<KeeperSearch />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignUpPage />} path="/sign-up" />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
