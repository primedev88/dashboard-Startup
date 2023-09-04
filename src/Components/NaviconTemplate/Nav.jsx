import React from 'react'
import './Nav.css'
const Nav = ({Icon,onClick}) => {
  return (
    <div className="nav" onClick={onClick}>
        {Icon && <Icon className="icon"/>}
    </div>
  );
};

export default Nav;