import Dashboard from './Dashboard/Dashboard';
import NavBar from './NavBar/NavBar';
import ProfileBar from './ProfileBar/ProfileBar';
import TitleBar from './TitleBar/TitleBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
            <TitleBar heading='Dashboard'/>
            <ProfileBar />
            <NavBar />
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
