import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
    
    return(
        <>
        <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2 sm:rounded-lg bg-white">
                            <div class="p-6 mr-2 bg-red-500 sm:rounded-lg mx-1 my-1">
                                <h1 class="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>

                                <p class="text-normal text-lg sm:text-sm font-medium text-gray-200 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div class="flex items-center mt-4 text-gray-100 py-6">
                                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                                    <div class="ml-4 text-sm tracking-wide font-light w-40">
                                        @imade.gt
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-100">
                                    <FontAwesomeIcon icon="envelope" size="3x"/>
                                    <span class="ml-4 text-sm tracking-wide font-light w-40">
                                        i-made@gmail.com
                                    </span>
                                </div>
                            </div>

                            <form class="p-6 flex flex-col justify-center">
                                <div class="flex flex-col">
                                    <label for="name" class="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="email" class="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="tel" class="hidden">Number</label>
                                    <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                </div>

                                <button type="submit" class="md:w-32 bg-red-600 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;