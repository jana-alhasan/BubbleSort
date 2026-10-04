const container = document.querySelector('.bars-container');
const randomizeButton = document.getElementById('randomize');
const solveButton = document.getElementById('solve');
const arrayLength = document.getElementById('arrayLength');
const speedInput = document.getElementById('speed');

let isSorting = false;

// Random integer between 1 and 100 (inclusive)
function randomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

// Delay between animation steps: speed 1 = 1000ms, speed 10 = 100ms
function delay() {
  return new Promise(resolve => setTimeout(resolve, 1100 - speedInput.value * 100));
}

function setControlsDisabled(disabled) {
  randomizeButton.disabled = disabled;
  solveButton.disabled = disabled;
  arrayLength.disabled = disabled;
}

function randomizeArray() {
  const length = parseInt(arrayLength.value, 10);
  if (Number.isNaN(length) || length < 2 || length > 100) {
    alert('Array length must be a number between 2 and 100.');
    return;
  }

  // Clear existing bars only after the input is validated
  container.innerHTML = '';

  for (let i = 0; i < length; i++) {
    const value = randomInt();
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}%`;
    bar.innerHTML = `<span class="bar-value">${value}</span>`;
    container.appendChild(bar);
  }
}

// Sort the bars using the bubble sort algorithm
async function bubbleSort() {
  const bars = container.querySelectorAll('.bar');
  const len = bars.length;

  // Nothing to sort, or a sort is already running
  if (len === 0 || isSorting) return;

  isSorting = true;
  setControlsDisabled(true);

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      bars[j].classList.add('selected');
      bars[j + 1].classList.add('selected');

      await delay();

      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        bars[j].classList.add('swapping');
        bars[j + 1].classList.add('swapping');

        await delay();

        // Swap heights and values of the two bars
        [bars[j].style.height, bars[j + 1].style.height] =
          [bars[j + 1].style.height, bars[j].style.height];
        [bars[j].innerHTML, bars[j + 1].innerHTML] =
          [bars[j + 1].innerHTML, bars[j].innerHTML];

        swapped = true;
      }

      bars[j].classList.remove('selected', 'swapping');
      bars[j + 1].classList.remove('selected', 'swapping');
    }

    bars[len - i - 1].classList.add('sorted');

    // No swaps in this pass means the array is already sorted
    if (!swapped) break;
  }

  bars.forEach(bar => bar.classList.add('sorted'));

  isSorting = false;
  setControlsDisabled(false);
}

randomizeButton.addEventListener('click', randomizeArray);
solveButton.addEventListener('click', bubbleSort);
