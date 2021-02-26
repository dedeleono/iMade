import Product from './Product'

const Shop = (props) => {

    return(
        <>
            <div className="h-80 m-auto container-fluid overflow-auto">
                <div className="flex flex-wrap container-fluid flex-row justify-around">
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