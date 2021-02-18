import Tabs from './Navigation_Items/Tabs'

const Navbar = (props) => {
    return(
        <div className="flex flex-row justify-between">
            <div className="w-4 ml-10 py-5">
                    a
            </div>
            <div className="container ">
                    {/*<NavItems /> <SlidingTabs/>*/}
                    <Tabs color='red'/>
            </div>
            <div className="mr-2 py-5"></div> 
            <div className="w-4 mr-16 py-5">
                    b
            </div>
        </div>

    )
}

export default Navbar;