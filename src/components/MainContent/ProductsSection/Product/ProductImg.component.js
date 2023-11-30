import getImage from "@/helpers/getImage";

function ProductImg(imageSrc) {
  const productImg = document.createElement("img");

  getImage(imageSrc).then((image) => {
    productImg.src = image.default;
  });
  productImg.alt = "Product Image";

  return productImg;
}

export default ProductImg;