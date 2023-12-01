const aquarium = document.getElementById("aquarium");
const fish = document.getElementById("fish");
let flipped = false;
let currentPosition = {};
let destination = {};

function getCurrentPosition() {
  const location = {};
  location.x = Number(
    window.getComputedStyle(fish).getPropertyValue("padding-left").slice(0, -2)
  );
  location.y = Number(
    window.getComputedStyle(fish).getPropertyValue("padding-top").slice(0, -2)
  );
  return location;
}

function move() {
  fish.style.transition = "all 5s ease-in-out allow-discrete";
  currentPosition = getCurrentPosition();
  destination = {
    x: Math.ceil(Math.random() * (aquarium.offsetWidth - 313)),
    y: Math.ceil(Math.random() * (aquarium.offsetHeight - 174)),
  };

  if (
    (destination.x < currentPosition.x && !flipped) ||
    (destination.x > currentPosition.x && flipped)
  ) {
    clearInterval(motionIntervalId);
    const flipIntervalId = setInterval(flip(), 1000);
  } else {
    fish.style.paddingTop = `${destination.y}px`;
    fish.style.paddingLeft = `${destination.x}px`;
  }
}

function flip() {
  if (!flipped) {
    fish.style.transform = "scale(-1,1)";
  } else {
    fish.style.transform = "scale(1,1)";
  }
  flipped = !flipped;
  motionIntervalId = setInterval(move, 4000);
}

move();
const motionIntervalId = setInterval(move, 4000);
