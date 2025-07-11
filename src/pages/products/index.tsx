import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import type {Product} from "../../types";
import ProductItem from "../../components/product/items";

const ProductList = () => {
    const {data} = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: "/products"
    }))
    console.log(data)
    return (
        <div>
            <h2>상품목록</h2>
            <ul className="products">
                {data?.map(product => (<ProductItem {...product} key={product.id}/>))}
            </ul>
        </div>
    );
};

export default ProductList;