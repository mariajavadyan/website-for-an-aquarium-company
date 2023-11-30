import getProductsDetails from "./getProductsDetails";
import { products } from '@/content/products';

function searchProducts() {
  const searchInput = document
    .getElementById("searchBar")
    .value.toLowerCase();
  const allProducts = getProductsDetails(products);
  const filteredProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchInput) ||
      product.description.toLowerCase().includes(searchInput)
    );
  });

  return filteredProducts;
}

export default searchProducts;