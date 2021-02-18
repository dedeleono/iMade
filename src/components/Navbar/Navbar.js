import NavItems from './Navigation_Items/NavItems'

const Navbar = (props) => {
    return(
            <div className="flex flex-row justify-between">
                <div className="w-4 ml-10">
                    a
                </div>
                <div className="w-4 h-50">
                    <NavItems />
                </div>
               <div className="mr-2"></div> 
                <div className="w-4 mr-16">
                    b
                </div>
            </div>
    )
}

export default Navbar;