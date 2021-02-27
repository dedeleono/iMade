import img from './productImg/corinto.jpeg'

const Product = (props) => {
    
    let sty = {
        backgroundImage: img,
    }

    return(
        <div class="flex flex-col w-1/3 justify-start items-center max-w-sm mx-1 my-8">
            <div style={sty} class="container h-48 w-full rounded-lg shadow-md bg-center bg-cover flex"><img src={img} alt="" className="flex-1 rounded-lg object-cover"></img></div>
            <div class="w-56 md:w-48 bg-gray-400 -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div class="py-2 text-center font-bold tracking-wide text-gray-100">pink</div>
                <div class="flex items-center justify-between py-2 px-3 bg-white">
                    <h1 class="text-gray-800 font-bold ">$5</h1>
                    <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;