import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tables from './pages/Tables';
import Notifications from './pages/Notifications';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f4f4f4]">
        <Sidebar />
        <div className="p-4 lg:ml-80">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Notifications />} path="/notifications" />
            <Route element={<Tables />} path="/tables" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Auth />} path="/signin" />
            <Route element={<SignUp />} path='signup' />
            <Route element={<Home />} path='*' />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
