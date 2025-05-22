// Отримуємо всі абзаци та обчислюємо їх довжину
let paragraphs = document.querySelectorAll('p');
let pArray = Array.from(paragraphs, p => p.innerText.length);
console.log(pArray);

// Масив чисел для подальших операцій
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

// Допоміжна функція для підрахунку за умовою
function countByCondition(array, conditionFn) {
    return array.filter(conditionFn).length;
}

// Функція для зручного виведення статистики
function logStat(label, value) {
    console.log(`${label}: ${value}`);
}

logStat("Максимальне", Math.max(...arr));
logStat("Мінімальне", Math.min(...arr));
logStat("Парні", countByCondition(arr, el => el % 2 === 0));
logStat("Непарні", countByCondition(arr, el => el % 2 !== 0));
logStat("Двоцифрові числа", countByCondition(arr, el => Math.abs(el).toString().length === 2));
logStat("Додатні", countByCondition(arr, el => el > 0));
logStat("Від'ємні", countByCondition(arr, el => el < 0));

let sorted = [...arr].sort((a, b) => a - b);
console.log("Сортований масив: ", sorted);
console.log("Реверсований масив: ", [...sorted].reverse());
