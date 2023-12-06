import displayProducts from "@/services/displayProducts";
import Product from "../Product/Product.component";
import searchProducts from "@/services/searchProducts";
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
    let productListContainer = document.querySelector("#productList");
    productListContainer.innerHTML = "";

    displayProducts(searchProducts()).then(products => {
      const searchInput = document.getElementById("searchBar").value.toLowerCase();
      const filteredProducts = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchInput) ||
          product.description.toLowerCase().includes(searchInput)
        );
      });

      filteredProducts.forEach(product => {
        productListContainer.appendChild(Product(product));
      });
    })
    .catch((error) => {
      console.error('Ошибка при загрузке изображения:', error);
    });
  };

  searchContainer.appendChild(label);
  searchContainer.appendChild(searchBar);

  return searchContainer;
}

export default CreateSearch;
