import Tabs from './Navigation_Items/Tabs'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Images/logo.jpeg'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className="flex flex-row justify-between">
            <div className="w-4 px-15 py-5 container flex w-28">
                <Link to="/landing"><img src={logo} alt="" className="mx-3 object-fill"></img></Link>
            </div>
            <div className="container ">
                    {/*<NavItems /> <SlidingTabs/>*/}
                    <Tabs color='red'/>
            </div>
            <div className="mr-2 py-5"></div> 
            <div className="w-auto mx-7 py-4">
                <FontAwesomeIcon icon={faShoppingCart} color="gray" size="2x"/>
            </div>
        </div>

    )
}

export default Navbar;