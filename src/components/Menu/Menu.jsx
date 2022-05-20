import MenuItem from "./MenuItem"
import Link from "../Link";
import {FaLinkedin ,FaFacebookSquare ,FaInstagram} from "react-icons/fa"

const Menu = ({closeEvent}) => {
  return (
    <div className='menu'>
        <ul>
            <MenuItem close={closeEvent} where="home" name="Home"/>
            <MenuItem close={closeEvent} where="about-us" name="About Us"/>
            <MenuItem close={closeEvent} where="what-we-do" name="What We Do"/>
            <MenuItem close={closeEvent} where="skills" name="Skills"/>
            <MenuItem close={closeEvent} where="portfolio" name="Portfolio"/>
            {/* <MenuItem close={closeEvent} where="faq" name="FAQ"/>
            <MenuItem close={closeEvent} where="client-speak" name="Client Speak"/> */}
            <MenuItem close={closeEvent} where="contact-us" name="Contact Us"/>
            <li className="links">
                <Link where="https://www.linkedin.com/"><FaLinkedin /></Link>
                <Link where="https://www.facebook.com/"><FaFacebookSquare /></Link>
                <Link where="https://www.instagram.com/"><FaInstagram /></Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu