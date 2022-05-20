import {FaArrowDown} from "react-icons/fa"
import {Link} from "react-scroll"
import "./WelcomeSection.scss";


const Welcome = () => {

    return (
        <div className="welcome-content" id="home">
          <div className="background" />
          <div className="text">
              <h3>Hi ,We Are freelancing</h3>
              <h1>developers</h1>
              <h5>based in Czech Republic</h5>
              <Link className="btn" to="portfolio" spy={true} smooth={true} offset={0} duration={500}>View Out Works</Link>
          </div>
          <div className="arrow">
              <FaArrowDown className="arrow"/>
          </div>
        </div>
  )
}

export default Welcome