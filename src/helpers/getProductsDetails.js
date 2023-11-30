import { products } from '@/content/products';

function getProductsDetails () {
    return products.map((product) => {
        return {
            ...product,
            image: product.image
        }
    });
}
export default getProductsDetails;