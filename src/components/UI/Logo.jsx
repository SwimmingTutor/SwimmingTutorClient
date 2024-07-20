import { Link } from 'react-router-dom'
import swimtutorLogo from '../../assets/images/swimtutor-logo.png'

const Logo = ({useLinkOption=true, size=""}) =>{
    return (
        <Link to={useLinkOption?"/":undefined} className='w-full'>
            <img src={swimtutorLogo} alt="swim tutor logo" className={`${size} object-contain mx-auto`} />
        </Link>
    )
}
export default Logo;