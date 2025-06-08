/**
 * Функция фильтрации массива по указанному типу данных
 * @param {Array} array - Массив с любыми данными
 * @param {string} type - Тип данных, которые нужно исключить
 * @returns {Array} Новый массив с исключенными элементами указанного типа
 */
function filterBy(array, type) {
    return array.filter(item => typeof item !== type);
}

// Пример использования
const mixedArray = ['hello', 'world', 23, '23', null];
const filteredArray = filterBy(mixedArray, 'string');
console.log(filteredArray);  // Вывод: [23, null]
