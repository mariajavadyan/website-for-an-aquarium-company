import imgSrc from "@/static/images/aquarium8.png";
import styles from "./Home.module.css";

function createGame() {
    const gameDiv = document.createElement("div");
    const titleElement = document.createElement("p");
    const gameDivElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const gameElement = document.createElement("p");

    gameDiv.classList.add(styles["gameContainer"]);
    titleElement.classList.add(styles["title"]);
    gameDivElement.classList.add(styles["gameSection"]);
    imgElement.setAttribute("class", styles["acuarium"]);
    imgElement.setAttribute("src", imgSrc);
    gameElement.classList.add(styles["game"]);

    titleElement.textContent = "AQUA DREAM SPACE";
    gameElement.textContent = "Game";

    gameDivElement.appendChild(imgElement);
    gameDivElement.appendChild(gameElement);

    gameDiv.appendChild(titleElement);
    gameDiv.appendChild(gameDivElement);

    return gameDiv;
}
  
export default createGame;