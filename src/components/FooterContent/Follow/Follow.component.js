import { socialMedia } from "@/content/socialMedia";
import commonStyles from "../Footer.module.css";
import styles from "./Follow.module.css";

function createFollow() {
    let followContainerElement = document.createElement("div");
    let followElement = document.createElement("div");
    let socIconsContainer = document.createElement("ul");

    followElement.textContent = "Follow";
    followContainerElement.setAttribute("class", commonStyles["container-elem"]);
    followContainerElement.append(followElement);

    socIconsContainer.setAttribute("class", styles["soc-icons-container"]);
    socialMedia.forEach(({url, classNames}) => {
        let liElement = document.createElement("li");
        let aElement = document.createElement("a");
        let iconElement = document.createElement("i");

        socIconsContainer.append(liElement);

        aElement.setAttribute("href", url);
        liElement.append(aElement);

        iconElement.classList.add(styles["soc-icons"], ...classNames);
        aElement.append(iconElement);
    });

    followContainerElement.append(socIconsContainer);

    return followContainerElement;
}

export default createFollow;