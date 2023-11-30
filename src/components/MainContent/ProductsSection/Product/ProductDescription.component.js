import styles from "./Product.module.css";

function ProductDescription(description) {
  const productDescription = document.createElement("p");
  productDescription.textContent = description;
  productDescription.classList.add(styles["product-description"]);
}

export default ProductDescription;
