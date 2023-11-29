  
  function toggleSection(sectionId) {
    let allSections = document.querySelectorAll("section");
  
    allSections.forEach(function (section) {
      section.style.display = "none";
    });
  
    let selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = "block";
  
    if (sectionId === "products") {
      displayProducts();
    }
  }
  
  function displayProducts(filteredProducts) {
    const productListContainer = document.getElementById("productList");
    if (productListContainer) {
      productListContainer.innerHTML = "";
  
      const productsToDisplay = filteredProducts || getProductsDetails();
  
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
  
  function getProductsDetails() {
    const products = [
      {
        name: "Round Aquarium",
        price: 19.99,
        description: "Aquarium for small fishes ",
        image: "pr1.webp",
      },
      {
        name: "Round Aquarium",
        price: 29.99,
        description: "Aquarium for small fishes ",
        image: "pr2.webp",
      },
      {
        name: "Round Aquarium",
        price: 39.99,
        description: "Aquarium for small fishes ",
        image: "pr3.webp",
      },
      {
        name: "Square Aquarium",
        price: 49.99,
        description: "Aquarium for medium fishes ",
        image: "pr4.webp",
      },
      {
        name: "Square Aquarium",
        price: 59.99,
        description: "Aquarium for medium fishes ",
        image: "pr5.webp",
      },
      {
        name: "Square Aquarium",
        price: 69.99,
        description: "Aquarium for medium fishes ",
        image: "pr6.webp",
      },
      {
        name: "Square Aquarium",
        price: 79.99,
        description: "Aquarium for medium fishes ",
        image: "pr7.webp",
      },
      {
        name: "Cylindrical Aquarium",
        price: 89.99,
        description: "Aquarium for small fishes ",
        image: "pr8.webp",
      },
      {
        name: "Cylindrical Aquarium",
        price: 99.99,
        description: "Aquarium for small fishes ",
        image: "pr9.webp",
      },
      {
        name: "Aquarium equipment",
        price: 19.99,
        description: "This is an aquarium equipment",
        image: "pr10.webp",
      },
      {
        name: "Aquarium equipment",
        price: 29.99,
        description: "This is an aquarium equipment",
        image: "pr11.webp",
      },
      {
        name: "Aquarium equipment",
        price: 39.99,
        description: "This is an aquarium equipment",
        image: "pr12.webp",
      },
      {
        name: "Aquarium equipment",
        price: 49.99,
        description: "This is an aquarium equipment",
        image: "pr13.webp",
      },
      {
        name: "Aquarium equipment",
        price: 59.99,
        description: "This is an aquarium equipment",
        image: "pr14.webp",
      },
      {
        name: "Aquarium equipment",
        price: 69.99,
        description: "This is an aquarium equipment",
        image: "pr15.webp",
      },
      {
        name: "Aquarium equipment",
        price: 79.99,
        description: "This is an aquarium equipment",
        image: "pr16.webp",
      },
      {
        name: "Aquarium equipment",
        price: 89.99,
        description: "This is an aquarium equipment",
        image: "pr17.webp",
      },
      {
        name: "Aquarium sponge",
        price: 99.99,
        description: "This is an aquarium sponge",
        image: "pr18.webp",
      },
      {
        name: "Aquatic Plant",
        price: 19.99,
        description: "Plant for aquarium",
        image: "pr19.webp",
      },
      {
        name: "Aquatic Plant",
        price: 29.99,
        description: "Plant for aquarium",
        image: "pr20.webp",
      },
      {
        name: "Aquatic Plant",
        price: 39.99,
        description: "Plant for aquarium",
        image: "pr21.webp",
      },
      {
        name: "Aquatic Plant",
        price: 39.99,
        description: "Plant for aquarium",
        image: "pr22.webp",
      },
      {
        name: "Aquatic Plant",
        price: 39.99,
        description: "Plant for aquarium",
        image: "pr23.webp",
      },
      {
        name: "Aquatic Plant",
        price: 39.99,
        description: "Plant for aquarium",
        image: "pr24.webp",
      },
      {
        name: "Aquatic stone",
        price: 39.99,
        description: "Stone for aquarium",
        image: "pr25.webp",
      },
      {
        name: "Aquatic stone",
        price: 39.99,
        description: "Stone for aquarium",
        image: "pr26.webp",
      },
      {
        name: "Aquatic stone",
        price: 39.99,
        description: "Stone for aquarium",
        image: "pr27.webp",
      },
    ];
  
    return products.map((product) => ({
      ...product,
      image: `./productspictures/${product.image}`,
    }));
  }
  
  document.querySelector("#root").appendChild(createHeader());
  function createMain() {
    const main = document.createElement("main");
    function createSection(id, title, content, isShowContent = false) {
      const section = document.createElement("section");
      section.id = id;
      if (isShowContent) {
        section.classList.add("show-content");
      }
  
      const h2 = document.createElement("h2");
      h2.textContent = title;
  
      const p = document.createElement("p");
      p.textContent = content;
  
      section.appendChild(h2);
      section.appendChild(p);
  
      return section;
    }
  
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
  
        displayProducts(filteredProducts);
      }
  
      // //product
      const productsSection = createSection("products", "Products");
  
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
  
      displayProducts();
  
      return productsSection;
    }
  
    main.appendChild(createProductsSection());
  
    //home
    function createHomeSection() {
      const homeSection = createSection(
        "home",
        "Welcome to My Website",
        "This is the home section of my website."
      );
  
      return homeSection;
    }
  
    main.appendChild(createHomeSection());
  
    // Create about section
    function createAboutSection() {
      const aboutSection = createSection(
        "about",
        "About Aqua Dream Space",
        "Aqua Dream Space is a leading Aquarium Manufacturer company committed to providing the best quality of aquarium products and services. Our team is passionate about designing and manufacturing premium aquariums that cater to the needs of aquatic enthusiasts around the world. From small to large scale aquariums, Aqua Dream Space has a product line that caters to every budget and preference. We take pride in our innovative designs, high-quality materials, and exceptional customer service. Get in touch with us today to learn more about how we can help bring your aquatic dreams to life."
      );
  
      // image for the about section
      const aboutImage = document.createElement("img");
      aboutImage.src = "about.webp";
      aboutImage.alt = "Aqua Dream Space Picture";
      aboutSection.appendChild(aboutImage);
  
      return aboutSection;
    }
  
    main.appendChild(createAboutSection());
  
    //  contact section
    function createContactSection() {
      const contactSection = createSection(
        "contact",
        "Contact Us",
        "Have questions or inquiries? Reach out to us using the contact information provided below."
      );
  
      // Append sections to the body
      return contactSection;
    }
  
    main.appendChild(createContactSection());
  
    return main;
  }
  
  document.querySelector("#root").appendChild(createMain());