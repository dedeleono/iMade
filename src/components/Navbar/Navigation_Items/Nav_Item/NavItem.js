import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return(
        <li className="">
            <NavLink to={props.link} exact activeClassName="" className="">{props.children}</NavLink>
        </li>
    )
}

export default NavItem;