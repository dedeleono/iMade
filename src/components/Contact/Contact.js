import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
    
    return(
        <>
        <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2 sm:rounded-lg bg-white">
                            <div class="p-6 mr-2 bg-red-500 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>

                                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-200 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div class="flex items-center mt-4 text-gray-100 py-6">
                                    {/*<svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>*/}
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    <div class="ml-4 text-sm tracking-wide font-semibold w-40">
                                        @imade.gt
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-100">
                                    {/*<svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>*/}
                                    <FontAwesomeIcon icon="envelope" size="2x"/>
                                    <span class="ml-4 text-sm tracking-wide font-semibold w-40">
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