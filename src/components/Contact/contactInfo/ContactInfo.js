import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactInfo = (props) => {
    return(
        <div class="flex items-center mt-4 text-gray-100 py-6">
            <FontAwesomeIcon icon={props.iconn} size="3x" />
            <div class="ml-4 text-sm tracking-wide font-light w-40">
                {props.text}
            </div>
        </div>
    )
}

export default ContactInfo;