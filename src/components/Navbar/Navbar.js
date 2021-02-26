import Tabs from './Navigation_Items/Tabs'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    return(
        <div className="flex flex-row justify-between">
            <div className="w-4 px-15 py-5">
                    a
            </div>
            <div className="container ">
                    {/*<NavItems /> <SlidingTabs/>*/}
                    <Tabs color='red'/>
            </div>
            <div className="mr-2 py-5"></div> 
            <div className="w-auto mx-7 py-4">
                <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            </div>
        </div>

    )
}

export default Navbar;