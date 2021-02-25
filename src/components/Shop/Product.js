const Product = (props) => {
    
    let sty = {
        backgroundImage: "url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)",
    }
    
    return(
        <div class="flex flex-col justify-start items-center max-w-sm mx-auto my-8">
        <div style={sty} class="bg-gray-300 h-48 w-full rounded-lg shadow-md bg-cover bg-center"></div>
        <div class="w-56 md:w-42 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Pink</div>
        <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
        <h1 class="text-gray-800 font-bold ">$5</h1>
        <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
        </div>
        </div>
    </div>
    )
}

export default Product;