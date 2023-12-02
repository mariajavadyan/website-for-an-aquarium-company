import getProductsDetails from "./getProductsDetails";
import { products } from '@/content/products';


function displayProducts(filteredProducts) {
  if(!document.getElementById("searchBar").value) {
    return getProductsDetails(products);
  }

  if(document.getElementById("searchBar").value && !filteredProducts) {
    return filteredProducts;
  }

  return filteredProducts;
}

export default displayProducts;