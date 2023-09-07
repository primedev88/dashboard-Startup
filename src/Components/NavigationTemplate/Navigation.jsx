import React from 'react'
import { AiOutlineHome,AiOutlineInfoCircle } from "react-icons/ai";
import { PiShareNetworkBold } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { MdNetworkCheck,MdNetworkCell } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import './Navigation.css'
import Nav from '../NaviconTemplate/Nav';
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
const Navigation = () => {
  const logout=()=>{
    signOut(auth);
  }
  return (
    <div className="navbar">
        <div className="menu">
          <Nav Icon={AiOutlineHome}/>
          <Nav Icon={PiShareNetworkBold}/>
          <Nav Icon={MdNetworkCell}/>
          <Nav Icon={MdNetworkCheck}/>
          <Nav Icon={AiOutlineInfoCircle}/>
          <Nav Icon={BiLogOut} onClick={logout}/>
          <Nav Icon={FiSettings }/>
        </div>
    </div>
  )
}

export default Navigation;