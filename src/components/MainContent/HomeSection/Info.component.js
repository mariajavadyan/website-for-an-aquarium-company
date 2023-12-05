import styles from "./Home.module.css";

function createInfo() {
    const infoDiv = document.createElement("div");
    const titleElement = document.createElement("p");
    const subtitleElement = document.createElement("p");
    const descriptionElement = document.createElement("p");

    infoDiv.classList.add(styles["textContent"]);
    titleElement.classList.add(styles["yourAquatic"]);
    subtitleElement.classList.add(styles["informationAbout"]);
    descriptionElement.classList.add(styles["dreamSpace"]);

    titleElement.textContent = "YOUR AQUATIC PARADISE";
    subtitleElement.textContent = "Information About Aqua Dream Space Company";
    descriptionElement.textContent = "At Aqua Dream Space, we are passionate about providing our customers with high-quality aquarium products. Our selection of aquariums, filters, pumps, decorations, and accessories is carefully curated to suit the needs of both novice and experienced aquarists. Our easy-to-use website and knowledgeable customer service team make it simple for you to create your own aquatic paradise. Whether you are looking to start a new aquarium project or enhance an existing one, Aqua Dream Space has everything you need. Contact us today to learn more!";

    infoDiv.appendChild(titleElement);
    infoDiv.appendChild(subtitleElement);
    infoDiv.appendChild(descriptionElement);

    return infoDiv;
}
  
  export default createInfo;