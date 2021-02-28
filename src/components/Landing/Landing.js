import styles from './Landing.module.css';
import img from '../../Images/logo.jpeg';
import prod from '../Shop/productImg/corinto.jpeg';

const Landing = (props) => {

    return(
        <>
            <div className="container w-full h-2/3 my-10 flex flex-row z-10 rounded-3xl shadow-md">
                <div className={`flex flex-1 rounded-3xl ${styles.slider} slider`}>
                    slider
                </div>
                <div className="flex flex-1 px-10">Logo</div>
            </div>
        </>
    )
}

export default Landing;