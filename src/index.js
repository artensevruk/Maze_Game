import "../style.css";

const labyrinth = [
  ["#", "#", "#", "#", "#"],
  ["*", ".", ".", ".", "#"],
  ["#", "#", ".", "#", "#"],
  ["#", ".", ".", ".", "#"],
  ["#", ".", "#", "#", "#"],
  ["#", ".", ".", "@", "#"],
  ["#", "#", "#", "#", "#"],
];

const findPosition = (labyrinth, token) => {
  for (let i = 0; i < labyrinth.length; i++) {
    const j = labyrinth[i].indexOf(token);
    if (j > -1) {
      return [i, j];
    }
  }
};

const findPeople = (labyrinth) => findPosition(labyrinth, "@");

const findFinish = (labyrinth) => findPosition(labyrinth, "*");

const [verticalFinish, horizonFinish] = findFinish(labyrinth);
let [vertical, horizon] = findPeople(labyrinth);

const createElement = (tagName, ...options) => {
  const element = document.createElement(tagName);
  for (const item of options) {
    if (Array.isArray(item)) {
      element.append(...item);
    } else if (typeof item === "object") {
      for (const key in item) {
        const value = item[key];
        element[key] = value;
      }
    } else {
      element.innerText = item;
    }
  }

  return element;
};

const drawMaze = () =>
  createElement(
    "table",
    { id: "table" },
    labyrinth.map((x) =>
      createElement(
        "tr",
        x.map((i) => createElement("td", { className: getClassName(i) }))
      )
    )
  );
const getClassName = (i) => {
  switch (i) {
    case "#":
      return "wall";
    case "@":
      return "player";
    case "*":
      return "finish";
    case ".":
      return "path";
    default:
      return i;
  }
};

const move = (dx, dy) => {
  let nextY = vertical + dy;
  let nextX = horizon + dx;
  if (labyrinth[nextY][nextX] == "#") {
    return;
  }
  table.remove();

  labyrinth[vertical][horizon] = ".";
  labyrinth[(vertical = nextY)][(horizon = nextX)] = "@";

  table = drawMaze();
  document.body.append(table);
  win();
};

let table = drawMaze();
document.body.append(table);

const onKeyDown = (event) => {
  console.log(event.code);

  if (event.code == "ArrowDown") {
    move(0, 1);
  } else if (event.code == "ArrowRight") {
    move(1, 0);
  } else if (event.code == "ArrowUp") {
    move(0, -1);
  } else if (event.code == "ArrowLeft") {
    move(-1, 0);
  }
};

function win() {
  if (labyrinth[verticalFinish][horizonFinish] == "@") alert("WINNN");
}

document.body.addEventListener("keydown", onKeyDown);
