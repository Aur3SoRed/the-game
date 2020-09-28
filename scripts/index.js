const width = 10;
const height = 10;

const cellCount = width * height;

console.log(cellCount);

const grid = document.querySelector('.grid');

const cells = [];

for (let index = 0; index < cellCount; index = index + 1) {
  console.log(index);
  const cell = document.createElement('div');
  cell.innerText = index;

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
    //case 'w':
    //console.log = 'Shoot';
    //break;
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

const addprincess = (index) => cells[index].classList.add('princess');
const removeprincess = (index) => cells[index].classList.remove('princess');

addprincess(princessPosition);
console.log(princessPosition);

window.addEventListener('keypress', WAD);

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

const addwafflecat = (index) => cells[index].classList.add('wafflecat');

wafflecatPosition.forEach((index) => {
  addwafflecat(index);
});

addwafflecat(wafflecatPosition);
console.log(wafflecatPosition);
