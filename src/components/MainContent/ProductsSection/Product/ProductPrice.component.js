import styles from "./Product.module.css";

function ProductPrice(price) {
  const productPrice = document.createElement("p");
  productPrice.textContent = `$${price.toFixed(2)}`;
  productPrice.classList.add(styles["product-price"]);

  return productPrice;
}

export default ProductPrice;
