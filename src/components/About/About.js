import img from '../Shop/productImg/corinto.jpeg'

const About = (props) => {
    return(
        <>
            <div className="container w-full h-2/3 my-10 flex flex-row z-10 rounded-3xl shadow-md">
                <div className="flex flex-1 rounded-3xl"><img className="object-fill rounded-3xl" alt="" src={img}/></div>
                <div className="flex flex-1 px-10">
                    <h1>i-Made</h1>
                </div>
            </div>
        </>
    )
}

export default About;