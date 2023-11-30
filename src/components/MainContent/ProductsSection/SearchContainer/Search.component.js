import displayProducts from "@/helpers/displayProducts";
import Product from "../Product/Product.component";
import searchProducts from "@/helpers/searchProducts";
import styles from "./Search.module.css";

function CreateSearch() {
  const searchContainer = document.createElement("div");
  searchContainer.id = "searchContainer";
  searchContainer.classList.add(styles["searchContainer"]);

  const label = document.createElement("label");
  label.for = "searchBar";
  label.textContent = "Search: ";

  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.id = "searchBar";
  searchBar.classList.add(styles["searchBar"]);
  searchBar.oninput = function () {
    let productListContainer = document.querySelector(".product-container");
    productListContainer.innerHTML = "";

    const productsToDisplay = displayProducts(searchProducts());
    productsToDisplay.forEach((product) => {
      productListContainer.appendChild(Product(product));
    });
  }

  searchContainer.appendChild(label);
  searchContainer.appendChild(searchBar);

  return searchContainer;
}

export default CreateSearch;