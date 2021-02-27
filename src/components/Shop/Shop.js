import Product from './Product'

const Shop = (props) => {

    return(
        <>
            <div className="h-3/4 mt-10 container-fluid overflow-auto">
                <div className="flex flex-wrap container-fluid flex-row justify-around pb-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                </div>
            </div>
        </>
    )
}

export default Shop;