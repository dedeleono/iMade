import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'


const NotFound = (props) => {
    
    /*const onClick (event) => {

    }*/
    
    return(
        <>
            <div class="h-screen w-screen bg-gray-100 flex items-center">
	            <div class="container flex flex-col md:flex-row items-center justify-center px-3 text-gray-700">
   		            <div class="max-w-md">
      		            <div class="text-5xl font-dark font-bold">404</div>
                        <p class="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
                        <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                        <NavLink to="/">
                            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-red-600 active:bg-red-600 hover:bg-red-700">back to homepage</button>
                        </NavLink>
                    </div>
                    <div class="max-w-lg">
                        <FontAwesomeIcon icon={faExclamationCircle} size="7x" color="red"/>
                    </div>
    
                </div>
            </div>
        </>
    )
}

export default NotFound;