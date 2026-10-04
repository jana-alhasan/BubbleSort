# Bubble Sort Visualizer

An interactive web app that visualizes the bubble sort algorithm step by step, built with HTML, CSS, and vanilla JavaScript.

**[Live Demo](https://jana-alhasan.github.io/BubbleSort/)**


## How It Works

Each number is shown as a bar whose height matches its value. When you click **Solve**, the app walks through the algorithm one comparison at a time:

- **Pink**: the two bars currently being compared
- **Orange**: the two bars being swapped
- **Purple**: bars that are in their final sorted position

## Features

- Random array generation (values from 1 to 100)
- Adjustable array length (2 to 100 elements)
- Adjustable animation speed
- Color-coded steps for comparing, swapping, and sorted elements
- Input validation, and controls are disabled while sorting is in progress
- Early exit when the array is already sorted
- Layout adapts to smaller screens

## How to Use

1. Enter the array length (between 2 and 100).
2. Click **Randomize** to generate a new array.
3. Use the **Speed** slider to set how fast the animation runs.
4. Click **Solve** and watch the sorting process.

## Technologies

- HTML5
- CSS3 (Flexbox, media queries)
- JavaScript (DOM manipulation, `async`/`await`)
- GitHub Pages for hosting

## Run Locally

```bash
git clone https://github.com/jana-alhasan/BubbleSort.git
cd BubbleSort
```

Then open `index.html` in your browser. No build step or dependencies are required.

## Possible Improvements

- Add other sorting algorithms (selection sort, insertion sort, merge sort)
- Keep the array state in JavaScript and render from it, instead of reading values from the DOM
- Add a pause/resume button

## Author

Jana Hasan
[LinkedIn](https://www.linkedin.com/in/jana-hasan/) | [GitHub](https://github.com/jana-alhasan)
