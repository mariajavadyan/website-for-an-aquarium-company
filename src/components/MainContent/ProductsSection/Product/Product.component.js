import DescriptionContainer from "./DescriptionContainer.component";
// import ProductDescription from "./ProductDescription.component";
import ProductImg from "./ProductImg.component";
import ProductName from "./ProductName.component";
import ProductPrice from "./ProductPrice.component";
import AddToCartButton from "./AddToCartButton.component";
import styles from "./Product.module.css";

function Product({ bucket, image, name, price, token, description }) {
  const productDiv = document.createElement("div");
  productDiv.classList.add(styles["product-item"]);

  // ProductDescription(description);

  const descriptionContainer = DescriptionContainer(description);

  productDiv.appendChild(ProductImg(`https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${image}?alt=media&token=${token}`));
  productDiv.appendChild(ProductName(name));
  productDiv.appendChild(ProductPrice(price));
  productDiv.appendChild(AddToCartButton());
  productDiv.appendChild(descriptionContainer);

  productDiv.addEventListener("mouseover", function () {
    descriptionContainer.style.display = "block";
  });

  productDiv.addEventListener("mouseout", function () {
    descriptionContainer.style.display = "none";
  });

  return productDiv;
}

export default Product;
