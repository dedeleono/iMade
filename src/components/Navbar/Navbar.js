import NavItems from './Navigation_Items/NavItems'

const Navbar = (props) => {
    return(
        <header className="flex flex-row justify-between">
            <div>
                a
            </div>
            <div className="">
                <NavItems />
            </div>
            <div>
                b
            </div>
        </header>
    )
}

export default Navbar;