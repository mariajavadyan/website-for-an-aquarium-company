import getProducts from "./getProducts";

function displayProducts(filteredProducts) {
  if(!document.getElementById("searchBar").value) {
    return getProducts();
  }

  if(document.getElementById("searchBar").value && !filteredProducts) {
    return filteredProducts;
  }

  return filteredProducts;
}

export default displayProducts;