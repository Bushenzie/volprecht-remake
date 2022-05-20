import { FaQuoteLeft } from "react-icons/fa"

const CarouselItem = ({quote,image,name,position}) => {
  return (
    <div className="Item">
        <FaQuoteLeft />
        <p className="quote">{quote}</p>
        <div className="person">
            <img src={image} alt="Person" />
            <span className="name">{name}</span>
            <span className="position">{position}</span>
        </div>
    </div>
  )
}

export default CarouselItem