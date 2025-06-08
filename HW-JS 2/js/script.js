document.addEventListener('DOMContentLoaded', () => {
    // Функция для проверки, является ли значение целым числом
    function isInteger(value) {
        return Number.isInteger(Number(value));
    }

    // Функция для получения целого числа от пользователя
    function getIntegerInput(promptMessage) {
        let value;
        do {
            value = prompt(promptMessage);
        } while (!isInteger(value));
        return Number(value);
    }

    // Получаем от пользователя число и находим все кратные 5 числа
    const userNumber = getIntegerInput("Please enter a number:");
    const multiplesOfFive = [];

    for (let i = 0; i <= userNumber; i++) {
        if (i % 5 === 0) {
            multiplesOfFive.push(i);
        }
    }

    if (multiplesOfFive.length > 0) {
        console.log(`Multiples of 5 from 0 to ${userNumber}:`, multiplesOfFive.join(', '));
    } else {
        console.log("Sorry, no numbers");
    }

    // Поиск простых чисел в диапазоне от m до n
    const m = getIntegerInput("Please enter the first number (m):");
    const n = getIntegerInput("Please enter the second number (n):");
    const lowerBound = Math.min(m, n);
    const upperBound = Math.max(m, n);

    // Функция для проверки, является ли число простым
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const primeNumbers = [];
    for (let i = lowerBound; i <= upperBound; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    if (primeNumbers.length > 0) {
        console.log(`Prime numbers from ${lowerBound} to ${upperBound}:`, primeNumbers.join(', '));
    } else {
        console.log("Sorry, no prime numbers");
    }
});
