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
    flip();
    setTimeout(() => {
      motionIntervalId = setInterval(move, 4000);
    }, 1000);
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

function swimAway() {
  clearInterval(motionIntervalId);
  currentPosition = getCurrentPosition();
  const mousePosition = {
    x: event.clientX - aquarium.offsetLeft,
    y: event.clientY - aquarium.offsetTop,
  };
  const angle = Math.atan2(
    mousePosition.y - currentPosition.y,
    mousePosition.x - currentPosition.x
  );
  const oppositeAngle = angle + Math.PI;
  const distance = Math.min(
    aquarium.offsetWidth - currentPosition.x,
    aquarium.offsetHeight - currentPosition.y,
    currentPosition.x,
    currentPosition.y
  );
  destination = {
    x: currentPosition.x + distance * Math.cos(oppositeAngle),
    y: currentPosition.y + distance * Math.sin(oppositeAngle),
  };

  if (
    (destination.x < currentPosition.x && !flipped) ||
    (destination.x > currentPosition.x && flipped)
  ) {
    flip();
  }
  fish.style.paddingTop = `${destination.y}px`;
  fish.style.paddingLeft = `${destination.x}px`;
  setTimeout(() => {
    motionIntervalId = setInterval(move, 4000);
  }, 5000);
}

fish.addEventListener("click", swimAway);

move();
const motionIntervalId = setInterval(move, 4000);
