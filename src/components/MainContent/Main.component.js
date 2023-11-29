import DisplayProducts from "@/components/DisplayProducts.component";
import CreateSection from "./CreateSection.component";
import CreateHomeSection from "./CreateHomeSection.component";
import CreateAboutSection from "./CreateAboutSection.component";
import CreateContactSection from "./CreateContactSection.component";

function createMain() {
  const main = document.createElement("main");

  function createProductsSection() {
    function searchProducts() {
      const searchInput = document
        .getElementById("searchBar")
        .value.toLowerCase();
      const allProducts = getProductsDetails();
      const filteredProducts = allProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchInput) ||
          product.description.toLowerCase().includes(searchInput)
        );
      });

      DisplayProducts(filteredProducts);
    }

    // //product
    const productsSection = CreateSection("products", "Products");

    // // search container
    const searchContainer = document.createElement("div");
    searchContainer.id = "searchContainer";

    const label = document.createElement("label");
    label.for = "searchBar";
    label.textContent = "Search: ";

    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.id = "searchBar";
    searchBar.oninput = searchProducts;

    searchContainer.appendChild(label);
    searchContainer.appendChild(searchBar);

    // product list container
    const productListContainer = document.createElement("div");
    productListContainer.id = "productList";
    productListContainer.classList.add("product-container");

    productsSection.appendChild(searchContainer);
    productsSection.appendChild(productListContainer);

    DisplayProducts();

    return productsSection;
  }

  main.appendChild(createProductsSection());
  main.appendChild(CreateHomeSection());
  main.appendChild(CreateAboutSection());
  main.appendChild(CreateContactSection());

  return main;
}

export default createMain;
