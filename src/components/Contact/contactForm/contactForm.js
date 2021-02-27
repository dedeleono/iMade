const contactForm = (props) => {
    return(
        <form class="p-10 flex flex-col justify-center w-1/2">
            <div class="flex flex-col">
                <label for="name" class="hidden">Full Name</label>
                <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
            </div>

            <div class="flex flex-col mt-2">
                <label for="email" class="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
            </div>

            <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">Number</label>
                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
            </div>

            <button type="submit" class="md:w-32 bg-red-600 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                Submit
            </button>
        </form>
    )
}

export default contactForm;