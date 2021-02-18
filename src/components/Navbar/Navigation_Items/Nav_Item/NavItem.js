import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    const active = {
        textColor: "text-white",
        backgroundColor: "bg-"+ props.color +"-600"
    }
    return(
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <NavLink to={props.link} exact activeClassName className={`focus:${active.textColor} focus:${active.backgroundColor} text-xs font-bold uppercase px-5 py-3 shadow rounded block leading-normal text-${props.color}-600 bg-white`}>{props.children}</NavLink>
        </li>
    )
}

export default NavItem;