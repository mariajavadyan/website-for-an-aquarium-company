function GetProductsDetails() {
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
export default GetProductsDetails;
