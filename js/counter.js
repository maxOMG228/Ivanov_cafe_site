// Відстежуємо кліки по всій сторінці для роботи всіх лічильників товарів
window.addEventListener('click', function (event) {
    // Перевіряємо, чи клік був саме по кнопці зміни кількості (+ або -)
    const action = event.target.dataset.step;

    if (action === 'inc' || action === 'dec') {
        // Знаходимо батьківську обгортку поточного лічильника
        const qtyWrapper = event.target.closest('[data-qty-wrapper]');
        if (!qtyWrapper) return;

        // Знаходимо елемент зі значенням лічильника всередині цієї картки
        const qtyDisplay = qtyWrapper.querySelector('[data-qty-value]');
        let currentQty = parseInt(qtyDisplay.innerText, 10);

        // Збільшуємо значення при натисканні "+"
        if (action === 'inc') {
            qtyDisplay.innerText = currentQty + 1;
        }

        // Зменшуємо значення при натисканні "-", але не нижче 1
        if (action === 'dec' && currentQty > 1) {
            qtyDisplay.innerText = currentQty - 1;
        }
    }
});