const width = 10;
const height = 10;

const cellCount = width * height;

console.log(cellCount);

const grid = document.querySelector('.grid');

let addScore = 0;

const resultDisplay = document.querySelector('span');

const cells = [];

let princessPosition = 95;

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
let deleteWafflecat = wafflecatPosition.slice(blueshootLaser);

for (let index = 0; index < cellCount; index = index + 1) {
  const cell = document.createElement('div');
  //cell.innerText = index;

  grid.appendChild(cell);
  cells.push(cell);
}

wafflecatPosition.forEach((wafflecatPosition) => {
  cells[wafflecatPosition].classList.add('wafflecat');
});

console.log(wafflecatPosition);

/////event listener direction

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

window.addEventListener('keypress', WAD);

///////////////////// Shoots

function blueshootLaser(event) {
  let blueshootPosition = princessPosition;
  let laserTime;
  const { key } = event;
  console.log(key);

  switch (key) {
    case 'w':
      console.log(blueshootPosition);
      laserTime = setInterval(laserShoot, 150);
      function laserShoot() {
        cells[blueshootPosition].classList.remove('blueshoot');
        blueshootPosition -= width;
        cells[blueshootPosition].classList.add('blueshoot');

        console.log('shoot');

        if (blueshootPosition < width) {
          console.log('llego');
          cells[blueshootPosition].classList.remove('blueshoot');
          clearInterval(laserTime);
          console.log('llego2');
        }

        if (cells[blueshootPosition].classList.contains('wafflecat')) {
          clearInterval(laserTime);
          cells[blueshootPosition].classList.remove('blueshoot');
          cells[blueshootPosition].classList.remove('wafflecat');
          console.log('se destruye?');
          addScore += 10;

          /////////////SCORING///////
          resultDisplay.textContent = addScore;
          /////////////////////////////////
        }
        //clearInterval(blueshoot );

        //if (cells[index].classList.contain('blueshoot', 'wafflecat')) {
        //resultDisplay.textContent = 'Goals';
        //cells[index].classList.remove('wafflecat');
        //clearInterval();
        //}

        //if (blueshootPosition === wafflecatPosition) {
        // cells[wafflecatPosition].classList.remove('blueshoot', 'wafflecat');
        //}

        ////////////////////////   TOCA QUITAR DISPAROS Y GATICOS HASTA AQUI LLEGASTE  //////////////////
      }
      break;
  }
}

window.addEventListener('keypress', blueshootLaser);

/////wafflecats positions

/////////////¿SERA QUE AQUI HACE FALTA UN SETINTERVAL? MIRA, NO SÉ, PERO DEBERÍAS IRTE A CENAR//////////
