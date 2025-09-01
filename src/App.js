import Background from "./components/background";
import './styles/app.css'
import NavBar from "./components/navbar";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.jsx";
import Profile from "./components/profileCard.jsx";

function App() {
  return (
    <div>
      <Background />
      <SplashCursor />
      <header>
        <NavBar />
      </header>
      <div className="profile-card">
        <Profile/>
      </div>
      <div className="profile-card">
        <Profile/>
      </div>
   
     





    </div>
  );
}
export default App;