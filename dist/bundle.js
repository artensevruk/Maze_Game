/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const labyrinth = [\r\n  [\"#\", \"#\", \"#\", \"#\", \"#\"],\r\n  [\".\", \".\", \".\", \".\", \"#\"],\r\n  [\"#\", \"#\", \".\", \"#\", \"#\"],\r\n  [\"#\", \".\", \".\", \".\", \"#\"],\r\n  [\"#\", \".\", \"#\", \"#\", \"#\"],\r\n  [\"#\", \".\", \".\", \"@\", \"#\"],\r\n  [\"#\", \"#\", \"#\", \"#\", \"#\"],\r\n];\r\n\r\nconst findPeople = (labyrinth) => {\r\n  for (let i = 0; i < labyrinth.length; i++) {\r\n    for (let j = 0; j < labyrinth[i].length; j++) {\r\n      if (labyrinth[i][j] == \"@\") {\r\n        return [i, j];\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nlet [vertical, horizon] = findPeople(labyrinth);\r\n\r\nconst createElement = (tagName, ...options) => {\r\n  const element = document.createElement(tagName);\r\n  for (const item of options) {\r\n    if (Array.isArray(item)) {\r\n      element.append(...item);\r\n    } else if (typeof item === \"object\") {\r\n      for (const key in item) {\r\n        const value = item[key];\r\n        element[key] = value;\r\n      }\r\n    } else {\r\n      element.innerText = item;\r\n    }\r\n  }\r\n\r\n  return element;\r\n};\r\n\r\nconst drawMaze = () =>\r\n  createElement(\r\n    \"table\",\r\n    { id: \"table\" },\r\n    labyrinth.map((x) =>\r\n      createElement(\r\n        \"tr\",\r\n        x.map((i) => createElement(\"td\", { className: i }))\r\n      )\r\n    )\r\n  );\r\n\r\nconst move = (dx, dy) => {\r\n  let nextY = vertical + dy;\r\n  let nextX = horizon + dx;\r\n  if (labyrinth[nextY][nextX] == \"#\") {\r\n    return;\r\n  }\r\n  table.remove();\r\n\r\n  labyrinth[vertical][horizon] = \".\";\r\n  labyrinth[(vertical = nextY)][(horizon = nextX)] = \"@\";\r\n\r\n  table = drawMaze();\r\n  document.body.append(table);\r\n  win();\r\n};\r\n\r\nlet table = drawMaze();\r\ndocument.body.append(table);\r\n\r\nconst onKeyDown = (event) => {\r\n  console.log(event.code);\r\n\r\n  if (event.code == \"ArrowDown\") {\r\n    move(0, 1);\r\n  } else if (event.code == \"ArrowRight\") {\r\n    move(1, 0);\r\n  } else if (event.code == \"ArrowUp\") {\r\n    move(0, -1);\r\n    \r\n  } else if (event.code == \"ArrowLeft\") {\r\n    move(-1, 0);\r\n  }\r\n};\r\n\r\nconsole.log(labyrinth[1][0]);\r\n\r\nfunction win() {\r\n  if (labyrinth[1][0] == \"@\") alert(\"WINNN\");\r\n}\r\n\r\ndocument.body.addEventListener(\"keydown\", onKeyDown);\r\n\n\n//# sourceURL=webpack://maze_game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;