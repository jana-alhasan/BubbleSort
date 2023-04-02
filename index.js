const container = document.querySelector('.bars-container');
const randomizeButton = document.getElementById('randomize');
const solveButton = document.getElementById('solve');
const arrayLength = document.getElementById('arrayLength');

// Helper function to generate a random integer between 1 and 100 (inclusive)
function randomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomizeArray() {
  // Clear any existing bars
  container.innerHTML = '';

  // Generate a new array of random integers and create a bar for each integer
  const array = [];
  const length = parseInt(arrayLength.value);
  if (length < 1 || length > 100) {
    alert('Array length must be between 1 and 100.');
    return;
  }
  for (let i = 0; i < length-1 ; i++) {
    const value = randomInt(1, 100);
    array.push(value);

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}%`;
    bar.innerHTML = `<span class="bar-value">${value}</span>`;
    container.appendChild(bar);
  }
}


// Sort the array using the bubble sort algorithm
async function bubbleSort() {
  const bars = container.querySelectorAll('.bar');
  const len = bars.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      bars[j].classList.add('selected');
      bars[j + 1].classList.add('selected');

      await new Promise(resolve => setTimeout(resolve, 900));

      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        bars[j].classList.add('swapping');
        bars[j + 1].classList.add('swapping');

        await new Promise(resolve => setTimeout(resolve, 900));

        // Swap the two bars
        const tempHeight = bars[j].style.height;
        bars[j].style.height = bars[j + 1].style.height;
        bars[j + 1].style.height = tempHeight;

        // Update the position of the value inside the bars
        const tempValue = bars[j].innerHTML;
        bars[j].innerHTML = bars[j + 1].innerHTML;
        bars[j + 1].innerHTML = tempValue;
      }

      bars[j].classList.remove('selected', 'swapping');
      bars[j + 1].classList.remove('selected', 'swapping');
    }

    bars[len - i - 1].classList.add('sorted');
  }

  bars[0].classList.add('sorted');
}

// Add event listeners to the buttons
randomizeButton.addEventListener('click', randomizeArray);
solveButton.addEventListener('click', bubbleSort);
