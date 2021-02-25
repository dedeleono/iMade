import Product from './Product'

const Shop = (props) => {

    return(
        <>
        <div className="flex flex-wrap container-fluid flex-row justify-around">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        </>
    )
}

export default Shop;