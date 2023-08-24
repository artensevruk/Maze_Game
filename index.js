// const canvas = querySelector("canvas");
// const context = canvas.getContext("2d");

// var img = document.createElement("IMG");
// img.src = "human.png";


const labyrinth = [
  ["#","#","#","#","#"],
  [".",".",".",".","#"],
  ["#","#",".","#","#"],
  ["#",".",".",".","#"],
  ["#",".","#","#","#"],
  ["#",".",".","@","#"],
  ["#","#","#","#","#"],
];


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
    labyrinth.map((x) =>
      createElement(
        "tr",
        x.map((i) => createElement("td", {className : i },  i))
      )
    )
  );

document.body.append(drawMaze());
