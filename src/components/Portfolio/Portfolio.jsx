import "./Portfolio.scss";
import Heading from "../Heading";
import PortfolioItem from "./PortfolioItem";
import {FaImage} from "react-icons/fa"
import Sunflower from "../../images/sunflower_dummy.jpg"

const Portfolio = () => {
  return (
    <div className="portfolio-content content" id="portfolio">
        <Heading little="Portfolio" main="Some of our recent projects"/>
        <div className="items">
            <PortfolioItem image={Sunflower} url="#" text="Lorem Ipsum" subtext="Company" >
                <FaImage />
            </PortfolioItem>
            <PortfolioItem image={Sunflower} url="#" text="Lorem Ipsum" subtext="Company" >
                <FaImage />
            </PortfolioItem>
            <PortfolioItem image={Sunflower} url="#" text="Lorem Ipsum" subtext="Company" >
                <FaImage />
            </PortfolioItem>
            <PortfolioItem image={Sunflower} url="#" text="Lorem Ipsum" subtext="Company" >
                <FaImage />
            </PortfolioItem>
            <PortfolioItem image={Sunflower} url="#" text="Lorem Ipsum" subtext="Company" >
                <FaImage />
            </PortfolioItem>
            <PortfolioItem image={Sunflower} url="#" text="Lorem Ipsum" subtext="Company" >
                <FaImage />
            </PortfolioItem>
        </div>
    </div>
  )
}

export default Portfolio