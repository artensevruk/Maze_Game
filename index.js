

const labyrinth = [
  ["#", "#", "#", "#", "#"],
  [".", ".", ".", ".", "#"],
  ["#", "#", ".", "#", "#"],
  ["#", ".", ".", ".", "#"],
  ["#", ".", "#", "#", "#"],
  ["#", ".", ".", "@", "#"],
  ["#", "#", "#", "#", "#"],
];


let horizon;
let vertical;
const people = () => {
  for(let i = 0; i < labyrinth.length ; i++){
    for(let j = 0; j < labyrinth[i].length ; j++ ){
      if (labyrinth[i][j] == "@"){
        vertical  = i ;
        horizon= j
      }
    }
  }
}

people();


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
    {id: "table"},
    labyrinth.map((x) =>
      createElement(
        "tr",
        x.map((i) => createElement("td", { className: i }))
      )
    )
  );

 
 let table = drawMaze();
 document.body.append(table);
 

const onKeyDown = (event) => {
  console.log(event.code);
  
  if (event.code == "ArrowDown") {
    
        table.remove()
        labyrinth[vertical][horizon] = '.';
        labyrinth[vertical + 1][horizon] = '@';
        vertical = vertical + 1;
        console.log(labyrinth);

         table = drawMaze();
         document.body.append(table);
        
        win();

  } else if (event.code == "ArrowRight") {
   
        table.remove()
        labyrinth[vertical][horizon] = '.';
        labyrinth[vertical][horizon + 1] = '@';
        horizon = horizon + 1;
        console.log(labyrinth);

        table = drawMaze();
        document.body.append(table);
        
        win();
  } else if(event.code == "ArrowUp") {
   
        table.remove()
        labyrinth[vertical][horizon] = '.';
        labyrinth[vertical - 1][horizon] = '@';
        vertical = vertical - 1;
        console.log(labyrinth);
       
        table = drawMaze();
        document.body.append(table);
        win();

  } else if(event.code == "ArrowLeft"){
      
      table.remove()
      labyrinth[vertical][horizon] = '.';
      labyrinth[vertical][horizon - 1] = '@';
      horizon = horizon - 1;
      console.log(labyrinth);
     

      table = drawMaze();
      document.body.append(table);
      win();
  }
};


console.log(labyrinth[1][0])
   

function win () {
  labyrinth[1][0] == "@" ? alert("WINNN") : false;
}

document.body.addEventListener("keydown", onKeyDown);
