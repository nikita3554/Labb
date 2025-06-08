document.addEventListener('DOMContentLoaded', () => {
    const priceInput = document.getElementById('priceInput');
    const errorMessage = document.getElementById('error-message');
    const resultContainer = document.getElementById('result-container');

    priceInput.addEventListener('focus', () => {
        priceInput.classList.add('green-border');
    });

    priceInput.addEventListener('blur', () => {
        const priceValue = parseFloat(priceInput.value);
        priceInput.classList.remove('green-border');
        errorMessage.textContent = '';

        if (isNaN(priceValue) || priceValue < 0) {
            priceInput.classList.add('red-border');
            errorMessage.textContent = 'Please enter correct price';
        } else {
            priceInput.classList.remove('red-border');
            displayResult(priceValue);
        }
    });

    function displayResult(price) {
        resultContainer.innerHTML = `
            <div class="result">
                <span>Текущая цена: ${price}</span>
                <button id="removeResult">X</button>
            </div>
        `;
        priceInput.style.color = 'green';

        const removeButton = document.getElementById('removeResult');
        removeButton.addEventListener('click', () => {
            resultContainer.innerHTML = '';
            priceInput.value = '';
            priceInput.style.color = 'black';
        });
    }
});
