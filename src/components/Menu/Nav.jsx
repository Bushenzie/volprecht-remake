import {useState,useEffect} from "react";
import {FaPhone,FaBars} from "react-icons/fa";
import {BsXSquareFill} from "react-icons/bs";
import "./Nav.scss";
import Menu from "./Menu";

const Nav = () => {

  const [menuActive , setMenuActive] = useState(false);

  useEffect(()=> {
    if(menuActive) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  })

  return (
    <div className="NavBar">
        <h2>Volprecht</h2>
        <div className="right-section">
            <FaPhone className="phone"/>
            <span className="phone">(+420) <span className="main_part">123 456 789</span></span>
            {menuActive ? <BsXSquareFill className="x-close" onClick={() => setMenuActive(prev => !prev)}/> :
            <FaBars className="hamburger" onClick={() => setMenuActive(prev => !prev)}/>}
        </div>
        {menuActive && <Menu closeEvent={()=> setMenuActive(false)}/>}
    </div>
  )
}

export default Nav