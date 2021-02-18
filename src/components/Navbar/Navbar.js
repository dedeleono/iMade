import NavItems from './Navigation_Items/NavItems'
import SlidingTabs from '../../SlidingTabs'

const Navbar = (props) => {
    return(
            <div className="flex flex-row justify-between">
                <div className="w-4 ml-10">
                    a
                </div>
                <div className="container ">
                    {/*<NavItems />*/}
                    <SlidingTabs />
                </div>
               <div className="mr-2"></div> 
                <div className="w-4 mr-16">
                    b
                </div>
            </div>
    )
}

export default Navbar;