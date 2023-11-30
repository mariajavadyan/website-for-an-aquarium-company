import styles from "./Product.module.css";

function ProductName(name) {
  const productName = document.createElement("h3");
  productName.textContent = name;
  productName.classList.add(styles["product-name"]);

  return productName;
}

export default ProductName;