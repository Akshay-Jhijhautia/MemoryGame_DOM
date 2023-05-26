function createElement() {
  const container = document.querySelector(".container");

  for (let index = 1; index <= 16; index++) {
    const newElement = document.createElement("div");
    let checkzero = index % 8;
    if (checkzero === 0) {
      checkzero = 8;
      newElement.innerText = checkzero;
    } else {
      newElement.innerText = checkzero;
    }

    newElement.classList.add("box");

    container.append(newElement);
  }
}

function game() {
  let countMatches = 0;
  let moves = 0;
  let seconds = 0;
  const set = new Set();
  const allClassesData = [];
  const allBoxes = document.querySelector(".container");
  const startButton = document.querySelector("button");
  const calculateMoves = document.querySelector("span");
  const timer = document.querySelector("p");
  const container = document.querySelector(".container");
  const gameOverHeading = document.querySelector("h1");

  startButton.addEventListener("click", function () {
    startButton.innerText = "Reload";
    startButton.addEventListener("click", function () {
      location.reload();
    });
    const myInterval = setInterval(function () {
      seconds++;
      timer.innerText = `time :${seconds} sec`;
    }, 1000);
    allBoxes.addEventListener("click", function (event) {
      if (!event.target.matches(".container")) {
        if (
          !event.target.classList.contains("one") &&
          !event.target.classList.contains("two") &&
          !event.target.classList.contains("three") &&
          !event.target.classList.contains("four") &&
          !event.target.classList.contains("five") &&
          !event.target.classList.contains("six") &&
          !event.target.classList.contains("seven") &&
          !event.target.classList.contains("eight")
        ) {
          moves++;
          calculateMoves.innerText = `${moves} moves`;
          setBackground(event.target.innerText, event.target);
          allClassesData.push(event.target);
          if (set.has(event.target.innerText)) {
            countMatches++;
            if (countMatches === 8) {
              clearInterval(myInterval);
              container.classList.add("gameOver");
              startButton.classList.add("gameOver");
              calculateMoves.classList.add("gameOver");
              timer.classList.add("gameOver");
              gameOverHeading.classList.remove("gameOver");
              gameOverHeading.innerText = `You have Won the game in ${seconds} seconds and ${moves} moves`;
              gameOverHeading.classList.add("endMessage");
            }
            while (allClassesData.length > 0) {
              allClassesData.pop();
              allClassesData.length--;
            }
            set.delete(event.target.innerText);
          } else if (set.size > 0) {
            set.clear();
            clearClasses(allClassesData);
          } else {
            set.add(event.target.innerText);
          }
        }
      }
    });
  });
}

function setBackground(value, target) {
  switch (value) {
    case "1":
      target.classList.add("one");
      break;
    case "2":
      target.classList.add("two");
      break;
    case "3":
      target.classList.add("three");
      break;
    case "4":
      target.classList.add("four");
      break;
    case "5":
      target.classList.add("five");
      break;
    case "6":
      target.classList.add("six");
      break;
    case "7":
      target.classList.add("seven");
      break;
    case "8":
      target.classList.add("eight");
      break;
  }
}

function clearClasses(data) {
  for (let index of data) {
    if (index.classList.contains("one")) {
      index.classList.remove("one");
    }
    if (index.classList.contains("two")) {
      index.classList.remove("two");
    }
    if (index.classList.contains("three")) {
      index.classList.remove("three");
    }
    if (index.classList.contains("four")) {
      index.classList.remove("four");
    }
    if (index.classList.contains("five")) {
      index.classList.remove("five");
    }
    if (index.classList.contains("six")) {
      index.classList.remove("six");
    }
    if (index.classList.contains("seven")) {
      index.classList.remove("seven");
    }
    if (index.classList.contains("eight")) {
      index.classList.remove("eight");
    }
  }
}

createElement();
game();
