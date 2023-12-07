import displayProducts from "@/services/displayProducts";
import Product from "../Product/Product.component";
import searchProducts from "@/services/searchProducts";
import debounce from "../../../../helpers/debounce";
import styles from "./Search.module.css";

// function debounce(func, wait) {
//   let timeout;

//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };

//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// function CreateSearch() {
//   const searchContainer = document.createElement("div");
//   searchContainer.id = "searchContainer";
//   searchContainer.classList.add(styles["searchContainer"]);

//   const label = document.createElement("label");
//   label.for = "searchBar";
//   label.textContent = "Search: ";

//   const searchBar = document.createElement("input");
//   searchBar.type = "text";
//   searchBar.id = "searchBar";
//   searchBar.classList.add(styles["searchBar"]);
//   searchBar.oninput = function () {
//     let productListContainer = document.querySelector("#productList");
//     productListContainer.innerHTML = "";

//     displayProducts(searchProducts())
//       .then((products) => {
//         const searchInput = document
//           .getElementById("searchBar")
//           .value.toLowerCase();
//         const filteredProducts = products.filter((product) => {
//           return (
//             product.name.toLowerCase().includes(searchInput) ||
//             product.description.toLowerCase().includes(searchInput)
//           );
//         });

//         filteredProducts.forEach((product) => {
//           productListContainer.appendChild(Product(product));
//         });
//       })
//       .catch((error) => {
//         console.error("Error loading images: ", error);
//       });
//   };

//   searchContainer.appendChild(label);
//   searchContainer.appendChild(searchBar);

//   return searchContainer;
// }

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

  const debouncedSearch = debounce(function () {
    let productListContainer = document.querySelector("#productList");
    productListContainer.innerHTML = "";

    displayProducts(searchProducts())
      .then((products) => {
        const searchInput = document
          .getElementById("searchBar")
          .value.toLowerCase();
        const filteredProducts = products.filter((product) => {
          return (
            product.name.toLowerCase().includes(searchInput) ||
            product.description.toLowerCase().includes(searchInput)
          );
        });

        filteredProducts.forEach((product) => {
          productListContainer.appendChild(Product(product));
        });
      })
      .catch((error) => {
        console.error("Error loading images: ", error);
      });
  }, 500);

  searchBar.oninput = debouncedSearch;

  searchContainer.appendChild(label);
  searchContainer.appendChild(searchBar);

  return searchContainer;
}

export default CreateSearch;
