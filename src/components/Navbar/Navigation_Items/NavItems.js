import NavItem from './Nav_Item/NavItem'

const NavItems = (props) => {
    return(
        /*meter todo dentro de un div para agregar icono/logo(izquierda) y tambien shop cart(derecha)*/
        <ul className="flex flex-row">
            <NavItem link="/">Home</NavItem>
            <NavItem link="/">About</NavItem>
            <NavItem link="/">Contact</NavItem>
        </ul>
    )
}

export default NavItems;