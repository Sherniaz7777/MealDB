import React, { useState } from "react";
import "../../components/header/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [val, setVal]= useState("")

   const click = ()=>{
    // alert(val)
   }
   const change =(e)=>{
    setVal(e.target.value)
}  
  return (
    <div className="main">
      <div className="Container">
        <nav>

          <div className="logotip">
            <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
          </div>

          <div className="Home-search">
            <NavLink to={'/'}>
              <button>Home</button>
            </NavLink>
            
            <input type="text" placeholder="Search" onChange={change} value={val}/>
            {/* <NavLink to={`/homes/${val}`}>

            <button onClick={click} >Click</button>
            </NavLink> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
