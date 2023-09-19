import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login/Login';
import './App.css'
import Navigation from './Components/NavigationTemplate/Navigation'
import Main from './Main/Main'

function App() {
  const[LoggedIn,setLoggedIn]=useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggedIn(true);
      }
      else{
        setLoggedIn(false);
      }
    })
  },[])
  return (
    <>
    <div className="App">
    {LoggedIn ?(
      <>
        <div className="navigation1">
          <Navigation/>
        </div>
        <Main/>
      </>): (<Login/>)
      }
    </div>
    </>
  )
}
export default App
