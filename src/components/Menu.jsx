import { Link } from "react-router-dom"

// ex. 마이페이지 리스트 한 개! (arrow 도 같이)
const Menu = ({ name, path }) => {
    return (
        <Link to={path} className="h-12 hover:bg-slate-100 hover:text-primary hover:font-semibold p-3">
            {name}
        </Link>
    )
}
export default Menu;