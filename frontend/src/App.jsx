import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

// Temporary placeholder components for role dashboards
const ProjectManager = () => <h1>Project Manager Dashboard</h1>;
const HR = () => <h1>HR Dashboard</h1>;
const Admin = () => <h1>Admin Dashboard</h1>;
const Client = () => <h1>Client Dashboard</h1>;
const Sales = () => <h1>Sales Dashboard</h1>;
const Finance = () => <h1>Finance Dashboard</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path='/' element={<LandingPage />} />

        {/* Login route */}
        <Route path='/login' element={<LoginPage />} />

        {/* Role-based dashboards */}
        <Route path='/project-manager' element={<ProjectManager />} />
        <Route path='/hr' element={<HR />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/client' element={<Client />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/finance' element={<Finance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
