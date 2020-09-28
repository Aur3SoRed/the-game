const width = 10;
const height = 10;

const cellCount = width * height;

console.log(cellCount);

const grid = document.querySelector('.grid');

const cells = [];

for (let index = 0; index < cellCount; index = index + 1) {
  console.log(index);
  const cell = document.createElement('div');
  // cell.innerText = index;

  grid.appendChild(cell);
  cells.push(cell);
}

/////event listener direction

let princessPosition = 95;

const WAD = (event) => {
  const key = event.key;
  console.log({ key });

  switch (key) {
    case 'KeyW':
      console.log = 'Shoot';
      break;
    case 'KeyA':
      console.log = 'Left';
      break;
    case 'KeyD':
      console.log = 'Right';
      break;
  }
};

cells[princessPosition].classList.add('princess');

window.addEventListener('keypress', WAD);
