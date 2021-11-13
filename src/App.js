import logo from './logo.svg';
// import './App.css';
import BackgroundVideo from './Components/BackgroundVideo'
import Navbar from'./Components/Navbar';
import HomePageOptions from './Components/HomePageOptions'
import Login from './Components/Login';
import React from 'react';


function App() {
  const [open, setOpen] = React.useState(false);
  const clickHandler =(e)=>{
    console.log("kar rha hai run");
    console.log(e);
    setOpen(e);
  }
  return (
    <div className="App">
      <BackgroundVideo />
      <Navbar clickHandler={clickHandler} />
      <HomePageOptions />
      <Login open={open} clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
