function renderList(array, parentElement) {
    const ul = document.createElement('ul');
    ul.innerHTML = array.map(item => {
        if (Array.isArray(item)) {
            return `<li>${renderList(item, ul).outerHTML}</li>`;
        } else if (typeof item === 'object' && item !== null) {
            return `<li>${renderObject(item)}</li>`;
        } else {
            return `<li>${item}</li>`;
        }
    }).join('');
    parentElement.appendChild(ul);
    return ul;
}

function renderObject(obj) {
    const ul = document.createElement('ul');
    ul.innerHTML = Object.entries(obj).map(([key, value]) => {
        if (Array.isArray(value)) {
            return `<li>${key}: ${renderList(value, ul).outerHTML}</li>`;
        } else if (typeof value === 'object' && value !== null) {
            return `<li>${key}: ${renderObject(value)}</li>`;
        } else {
            return `<li>${key}: ${value}</li>`;
        }
    }).join('');
    return ul.outerHTML;
}

function clearPageAfterTimeout(timeout) {
    let countdown = timeout;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `Page will clear in ${countdown} seconds`;

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = `Page will clear in ${countdown} seconds`;
        if (countdown <= 0) {
            clearInterval(interval);
            document.getElementById('content').innerHTML = '';
            countdownElement.textContent = 'Page has been cleared';
        }
    }, 1000);
}

// Примеры массивов
const array1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
const array2 = ['1', '2', '3', 'sea', 'user', 23];
const array3 = ['nested', ['array', 'inside', 'array'], { key: 'value' }, 'another item'];

// Вызов функции для рендеринга массивов на страницу
const contentElement = document.getElementById('content');
renderList(array1, contentElement);
renderList(array2, contentElement);
renderList(array3, contentElement);

// Очистка страницы через 10 секунд
clearPageAfterTimeout(10);
