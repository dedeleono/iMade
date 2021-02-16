import NavItem from './Nav_Item/NavItem'

const NavItems = (props) => {
    return(
        <ul className="">
            <NavItem link="/">Home</NavItem>
            <NavItem link="/">About</NavItem>
            <NavItem link="/">Contact</NavItem>
        </ul>
    )
}

export default NavItems;