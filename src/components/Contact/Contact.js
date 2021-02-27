import ContactForm from './contactForm/ContactForm';
import ContactInfo from './contactInfo/ContactInfo';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
    
    return(
        <>
            <div className="container w-full h-2/3 my-10 flex flex-row z-10 rounded-3xl shadow-md bg-white">
                <div class="p-10 mr-2 bg-red-500 w-2/3 px-10 sm:rounded-3xl">
                    <h1 class="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                        Get in touch
                    </h1>

                    <p class="pt-3 mb-20 text-normal text-lg sm:text-sm font-medium text-gray-200 mt-2">
                        Fill in the form to start a conversation
                    </p>
                    <ContactInfo iconn={faInstagram} text={"imade.gt"}/>
                    <ContactInfo iconn={faEnvelope} text={"i-made@gmail.com"}/>
                </div>
                    <ContactForm/>     
            </div>
        </>
    )
}

export default Contact;