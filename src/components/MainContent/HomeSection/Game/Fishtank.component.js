import backgroundImg from "@/static/images/aquarium8.png";

function CreateFishTank(id) {
  const aquarium = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", backgroundImg);
  aquarium.setAttribute("id", "aquarium");

  aquarium.appendChild(imgElement);

  return aquarium;
}

export default CreateFishTank;
