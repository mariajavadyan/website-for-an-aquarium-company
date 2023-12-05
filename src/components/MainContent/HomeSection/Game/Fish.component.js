import clownfish from "@/static/images/Clown.png";

function CreateFish() {
  const aquarium = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", clownfish);
  aquarium.setAttribute("id", "fish");

  aquarium.appendChild(imgElement);

  return aquarium;
}

export default CreateFish;
