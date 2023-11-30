import styles from "./Product.module.css";

function DescriptionContainer(description) {
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add(styles["description-container"]);
  descriptionContainer.innerHTML = `<p>${description}</p>`;

  return descriptionContainer;
}

export default DescriptionContainer;
