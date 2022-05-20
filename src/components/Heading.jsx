import React from 'react'

const Heading = ({little,main}) => {
  return (
    <div className="heading-section">
            <h5 className="little_heading">{little}</h5>
            <h2>{main}</h2>
        </div>
  )
}

export default Heading