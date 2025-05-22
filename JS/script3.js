const matrix = [
  [3, 7, 0, 4, 0],
  [6, -8, 1, -9, 0],
  [12, 5, 6, 6, 7],
  [9, 7, 8, 8, 8],
  [-35, 12, 9, 0, 4],
];

console.log("Матриця: ", matrix);

// Підрахунок додатних елементів
const totalPositive = matrix.flat().filter(x => x > 0).length;
console.log("Додатні елементи: " + totalPositive);

// Рядки без нулів
const rowsWithoutZeroCount = matrix.filter(row => !row.includes(0)).length;
console.log("Кількість рядків, які не містять нуль: " + rowsWithoutZeroCount);

// Кількість стовпців із нулями
function getColsWithZeroCount(matrix) {
  return matrix[0].filter((_, j) => matrix.some(row => row[j] === 0)).length;
}
console.log("Кількість стовпців, які містять нуль: " + getColsWithZeroCount(matrix));

// Індекс рядка з найдовшою серією
function getLongestSeriesLength(row) {
  let maxLength = 1, current = 1;
  for (let i = 1; i < row.length; i++) {
    current = (row[i] === row[i - 1]) ? current + 1 : 1;
    maxLength = Math.max(maxLength, current);
  }
  return maxLength;
}

function getRowWithLongestSeriesIndex(matrix) {
  let maxSeries = 1;
  let resultIndex = -1;
  matrix.forEach((row, index) => {
    const series = getLongestSeriesLength(row);
    if (series > maxSeries) {
      maxSeries = series;
      resultIndex = index;
    }
  });
  return resultIndex;
}

const index = getRowWithLongestSeriesIndex(matrix);
console.log(
    index === -1
        ? "Серії повторюваних елементів немає"
        : "Індекс рядка з найдовшою серією: " + index
);

// Добуток у рядках без від'ємних
const productArray = matrix
    .filter(row => row.every(el => el >= 0))
    .map(row => row.reduce((prod, el) => prod * el, 1));
console.log("Добуток елементів у рядках без від’ємних елементів: ", productArray);

// Сума у стовпцях без від’ємних
function getSumArrayWithoutNegativeElementsInCols(matrix) {
  const cols = matrix[0].length;
  const validCols = [];

  for (let j = 0; j < cols; j++) {
    if (matrix.every(row => row[j] >= 0)) validCols.push(j);
  }

  return validCols.map(j => matrix.reduce((sum, row) => sum + row[j], 0));
}

console.log("Сума елементів у стовпцях без від’ємних елементів: ",
    getSumArrayWithoutNegativeElementsInCols(matrix));
