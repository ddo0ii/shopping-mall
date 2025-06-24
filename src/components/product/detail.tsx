import type {Product} from "../../types";

const ProductDetail = ({
                           item: {
                               category, title, image, description, price, rating: {rate}
                           }
                       }: {
                           item: Product
                       }
) =>
    (
        <div className="product-detail">
            <p className='product-detail__category'>{category}</p>
            <p className='product-detail__title'>{title}</p>
            <img className='product-detail__image' src={image} alt='이미지'/>
            <p className='product-detail__description'>{description}</p>
            <span className='product-detail__price'>${price} </span>
            <span className='product-detail__rating'>⭐ {rate}</span>
        </div>
    );

export default ProductDetail;