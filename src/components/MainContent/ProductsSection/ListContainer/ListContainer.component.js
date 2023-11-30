import displayProducts from "@/helpers/displayProducts";
import Product from "../Product/Product.component";
import styles from "./ListContainer.module.css";

function CreateListContainer() {
  const productListContainer = document.createElement("div");
  productListContainer.id = "productList";
  productListContainer.classList.add(styles["product-container"]);
  
  let productId = document.getElementById('Products');
  productId.addEventListener("click", function () {
    const productsToDisplay = displayProducts();

    productsToDisplay.forEach((product) => {
      productListContainer.appendChild(Product(product));
    });
  });

  return productListContainer;
}

export default CreateListContainer;