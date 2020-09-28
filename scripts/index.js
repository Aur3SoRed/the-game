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
