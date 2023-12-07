import displayProducts from "@/services/displayProducts";
import Product from "../Product/Product.component";
import styles from "./ListContainer.module.css";

function CreateListContainer() {
  const productListContainer = document.createElement("div");
  productListContainer.id = "productList";
  productListContainer.classList.add(styles["product-container"]);

  let productId = document.getElementById("Products");
  productId.addEventListener("click", function () {
    displayProducts()
      .then((products) => {
        for (const product of products) {
          productListContainer.appendChild(Product(product));
        }
      })
      .catch((error) => {
        console.error("Error loading images: ", error);
      });
  });

  return productListContainer;
}

export default CreateListContainer;
