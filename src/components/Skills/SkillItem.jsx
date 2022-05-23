import React from 'react'

const SkillItem = ({name,percent}) => {
  return (
    <div className='skill-item'>
        <div className="upper">
            <h5>{name}</h5>
            <h5>{percent}%</h5>
        </div>
        <div className="lower">
            <progress value={percent} max="100" />
        </div>
    </div>
  )
}

export default SkillItem