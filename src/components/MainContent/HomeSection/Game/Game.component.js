import CreateFish from "./Fish.component";
import CreateFishTank from "./Fishtank.component";
// import imgSrc from "@/static/images/aquarium8.png";
import styles from "../Home.module.css";

function createGame() {
  const gameDiv = document.createElement("div");
  const titleElement = document.createElement("p");
  const gameDivElement = document.createElement("div");

  gameDiv.classList.add(styles["gameContainer"]);
  titleElement.classList.add(styles["title"]);
  gameDivElement.classList.add(styles["gameSection"]);
  titleElement.textContent = "AQUA DREAM SPACE";

  gameDivElement.appendChild(CreateFish());
  gameDivElement.appendChild(CreateFishTank());

  gameDiv.appendChild(titleElement);
  gameDiv.appendChild(gameDivElement);

  return gameDiv;
}

export default createGame;
