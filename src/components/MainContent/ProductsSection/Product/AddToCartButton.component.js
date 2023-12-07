import styles from "./Product.module.css";

function AddToCartButton() {
  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.classList.add(styles["add-to-cart-btn"]);

  return addToCartButton;
}

export default AddToCartButton;
