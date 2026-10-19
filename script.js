function makeBoard(resolution) {
  for (let i = 0; i < resolution ** 2; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    div.style.width = `${960 / resolution}px`;
    div.style.height = `${960 / resolution}px`;
    container.appendChild(div);
    div.addEventListener("mouseover", setColor);
  }
}

function setColor(event) {
  const color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
  event.target.style.backgroundColor = color;
}

let container = document.createElement("div");
container.setAttribute("class", "container");
document.querySelector("body").appendChild(container);
makeBoard(16);

const button = document.querySelector("#newGridButton");
button.addEventListener("click", reset);

function reset(event) {
  let userResolution = 101;
  while (userResolution > 100) {
    userResolution = prompt(
      "what resolution would you like your drawingpad to be, it must be less than 101",
    );
  }
  container.remove();
  container = document.createElement("div");
  container.setAttribute("class", "container");
  document.querySelector("body").appendChild(container);
  makeBoard(userResolution);
}
