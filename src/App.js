import logo from './logo.svg';
// import './App.css';
import BackgroundVideo from './Components/BackgroundVideo'
import Navbar from'./Components/Navbar';
import HomePageOptions from './Components/HomePageOptions'




function App() {
  
  return (
    <div className="App">
      <BackgroundVideo />
      <Navbar />
      <HomePageOptions />
    </div>
  );
}

export default App;
