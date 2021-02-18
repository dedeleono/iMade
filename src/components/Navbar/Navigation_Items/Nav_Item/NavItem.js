import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return(
        <li className="pr-4">
            <Link to={props.link} exact activeClassName="" className="hover:bg-red-700 hover:bg-opacity-25 hover:border-b-4 hover:border-red-700 py-2.5 px-4 hover:text-white">{props.children}</NavLink>
        </li>
    )
}

export default NavItem;