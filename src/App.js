import Background from "./components/background";
import './styles/app.css'
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor.jsx";
import NavBar from "./components/navbar.jsx";


function App() {

  return (
    <div>
      <Background/>
      <SplashCursor/>
      <NavBar/>

    </div>
  );
}
export default App;