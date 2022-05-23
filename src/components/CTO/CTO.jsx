import "./CTO.scss"
import { Link } from 'react-scroll'

const CTO = () => {
  return (
    <div className="cto-content content">
        <div className="background"></div>
        <div className="text">
            <h2>Interested in working with us?</h2>
            <Link className="btn" to="contact-us" spy={true} smooth={true} offset={0} duration={500} href="contact-us">Hire Us!</Link>
            
        </div>
    </div>
  )
}

export default CTO