import styles from './Landing.module.css';
import img from '../../Images/logo.jpeg';
import prod from '../Shop/productImg/corinto.jpeg';

const Landing = (props) => {

    return(
        <>
            <div className="container w-full h-2/3 my-10 flex flex-row z-10 rounded-3xl shadow-md">
                <div className="flex flex-1 rounded-3xl slider w-2/3">
                    slider
                </div>
                <div className="flex flex-1 container w-1/3"><img src={img} alt="" className="object-contain rounded-3xl"/></div>
            </div>
        </>
    )
}

export default Landing;