import Product from './Product';
import { Scrollbars } from 'react-custom-scrollbars';

const Shop = (props) => {

    return(
        <>
        <Scrollbars style={{width: "100%", height: "100%"}} thumbMinSize={10}>
            <div className="h-3/4 container-fluid overflow-auto">
                    <div className="flex flex-wrap container-fluid flex-row justify-around pb-5">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    </div>
            </div>
        </Scrollbars>
        </>
    )
}

export default Shop;