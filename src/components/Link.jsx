import React from 'react'

const Link = ({where,children: icon}) => {
  return (
    <a className="Item" href={where}>{icon}</a>
  )
}

export default Link