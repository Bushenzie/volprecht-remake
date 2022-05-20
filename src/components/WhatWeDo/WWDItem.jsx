
const Item = ({name,text, children: icon}) => {
  return (
    <div className="item">
        {icon}
        <h3>{name}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Item