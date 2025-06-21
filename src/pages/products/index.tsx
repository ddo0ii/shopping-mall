import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient.ts";
import type {Product} from "../../types.ts";
import ProductItem from "../../components/product/items.tsx";

const ProductList = () => {
    const {data} = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: "/products"
    }))
    console.log(data)
    return (
        <div>
            <ul className="products">
                {data?.map(product => (<ProductItem {...product} key={product.id}/>))}
            </ul>
        </div>
    );
};

export default ProductList;