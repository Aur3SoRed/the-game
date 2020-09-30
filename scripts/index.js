const width = 10;
const height = 10;

const cellCount = width * height;

console.log(cellCount);

const grid = document.querySelector('.grid');

const cells = [];

const resultDisplay = document.querySelector('#result');

for (let index = 0; index < cellCount; index = index + 1) {
  console.log(index);
  const cell = document.createElement('div');
  //cell.innerText = index;

  grid.appendChild(cell);
  cells.push(cell);
}

/////event listener direction

let princessPosition = 95;

const WAD = (event) => {
  const { key } = event;
  console.log(event.key);

  const x = princessPosition % width;

  switch (key) {
    case 'a':
      if (x > 0) {
        removeprincess(princessPosition);

        princessPosition = princessPosition - 1;
      }

      console.log('Left');
      break;
    case 'd':
      if (x < width - 1) {
        removeprincess(princessPosition);
        princessPosition = princessPosition + 1;
      }
      console.log('Right');
      break;
    default:
      break;
  }
  addprincess(princessPosition);
};

const addprincess = (princessPosition) =>
  cells[princessPosition].classList.add('princess');
const removeprincess = (princessPosition) =>
  cells[princessPosition].classList.remove('princess');

addprincess(princessPosition);
console.log(princessPosition);

///////////music////

/////////////
window.addEventListener('keypress', WAD);

///////////////////// Shoots

let blueshootiming = 300;

function blueshoot(event) {
  let blueshootPosition = princessPosition;
  const { key } = event;
  console.log(key);

  switch (key) {
    case 'w':
      setInterval(() => {
        blueshootPosition -= width;
        cells[blueshootPosition].classList.remove('blueshoot');

        cells[blueshootPosition].classList.add('blueshoot');
        console.log('shoot');

        if (blueshootPosition < width) {
          console.log('llego');
          cells[blueshootPosition].classList.remove('blueshoot');
          clearInterval();
          console.log('llego2');
          if (cells[index].classList.contain('blueshoot', 'wafflecat')) {
            resultDisplay.textContent = 'Goals';
            cells[index].classList.remove('wafflecat');
            /////////////SCORING///////
            result++;
            resultDisplay.textContent = result;
            /////////////////////////////////
            clearInterval();
          }
        }
        //clearInterval(blueshoot );

        //if (cells[index].classList.contain('blueshoot', 'wafflecat')) {
        //resultDisplay.textContent = 'Goals';
        //cells[index].classList.remove('wafflecat');
        //clearInterval();
        //}

        if (blueshootPosition === wafflecatPosition)
          (blueshootPosition = removeblueshoot()), removewafflecat();
        cells[blueshoot].classList.remove('blueshoot');
        cells[wafflecatPosition].classList.remove('wafflecat');
        ////////////////////////   TOCA QUITAR DISPAROS Y GATICOS HASTA AQUI LLEGASTE  //////////////////
      }, 150);
      break;
  }
}

window.addEventListener('keypress', blueshoot);

/////wafflecats positions

let wafflecatPosition = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
];

const addwafflecat = (wafflecatPosition) =>
  cells[wafflecatPosition].classList.add('wafflecat');

wafflecatPosition.forEach((wafflecatPosition) => {
  addwafflecat(wafflecatPosition);
});

console.log(wafflecatPosition);
