function ProductImg(image) {
  const productImg = document.createElement("img");
  productImg.src = image;
  productImg.alt = "Product Image";

  return productImg;
}

export default ProductImg;