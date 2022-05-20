import { Link } from 'react-scroll'

const MenuItem = ({where,name,close}) => {
  return (
    <li><Link onClick={close} to={where} spy={true} smooth={true} offset={0} duration={500} href={where}>{name}</Link></li>
  )
}

export default MenuItem