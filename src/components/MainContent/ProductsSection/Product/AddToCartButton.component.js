import styles from "./Product.module.css";

function AddToCartButton() {
  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.classList.add(styles["add-to-cart-btn"]);
  // addToCartButton.addEventListener("click", function () {
  //   AddToCartButton(product.price);
  // });

  return addToCartButton;
}

export default AddToCartButton;
