import GetProductsDetails from "./GetProductsDetails.component";

function DisplayProducts(filteredProducts) {
  const productListContainer = document.getElementById("productList");
  if (productListContainer) {
    productListContainer.innerHTML = "";

    const productsToDisplay = filteredProducts || GetProductsDetails();

    productsToDisplay.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-item");

      const productImg = document.createElement("img");
      productImg.src = product.image;
      productImg.alt = "Product Image";

      const productName = document.createElement("h3");
      productName.textContent = product.name;
      productName.classList.add("product-name");

      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      productPrice.classList.add("product-price");

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productDescription.classList.add("product-description");

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.classList.add("add-to-cart-btn");
      // addToCartButton.addEventListener("click", function () {
      //   addToCart(product.price);
      // });

      const descriptionContainer = document.createElement("div");
      descriptionContainer.classList.add("description-container");
      descriptionContainer.innerHTML = `<p>${product.description}</p>`;

      productDiv.appendChild(productImg);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(addToCartButton);
      productDiv.appendChild(descriptionContainer);

      productListContainer.appendChild(productDiv);

      productDiv.addEventListener("mouseover", function () {
        descriptionContainer.style.display = "block";
      });

      productDiv.addEventListener("mouseout", function () {
        descriptionContainer.style.display = "none";
      });
    });
  }
}

export default DisplayProducts;
