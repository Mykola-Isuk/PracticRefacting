// Функція, яка додає клас "selected" до кожного другого td
function highlightOddTds(table) {
    table.querySelectorAll("td").forEach((td, index) => {
        if (index % 2 !== 0) td.classList.add("selected");
    });
}

// Функція, яка обробляє всі таблиці всередині div'ів
function processTablesInDivs(divs) {
    divs.forEach(div => {
        div.querySelectorAll("table").forEach(highlightOddTds);
    });
}

// Отримуємо всі div з класом "table" і обробляємо їх
const divTags = document.querySelectorAll("div.table");
processTablesInDivs(divTags);
