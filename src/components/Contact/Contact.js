import ContactForm from './contactForm/ContactForm';
import ContactInfo from './contactInfo/ContactInfo';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    
    return(
        <>
        <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class=" overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2 sm:rounded-lg bg-white">
                            <div class="p-6 mr-2 bg-red-500 sm:rounded-lg mx-1 my-1">
                                <h1 class="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>

                                <p class="text-normal text-lg sm:text-sm font-medium text-gray-200 mt-2">
                                    Fill in the form to start a conversation
                                </p>
                            <ContactInfo iconn={faInstagram} text={"imade.gt"}/>
                            <ContactInfo iconn={faEnvelope} text={"i-made@gmail.com"}/>
                            </div>
                            <ContactForm/>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;