document.addEventListener('DOMContentLoaded', () => {
    let name = prompt("Please enter your name:");
    let age = prompt("Please enter your age:");

    // Проверка корректности введенных данных
    while (!name || isNaN(age) || age === null || age.trim() === '') {
        if (!name) {
            name = prompt("Name cannot be empty. Please enter your name:", name);
        }
        if (isNaN(age) || age === null || age.trim() === '') {
            age = prompt("Age must be a number. Please enter your age:", age);
        }
    }

    age = Number(age);

    if (age < 18) {
        alert("You are not allowed to visit this website.");
    } else if (age >= 18 && age <= 22) {
        const isSure = confirm("Are you sure you want to continue?");
        if (isSure) {
            alert(`Welcome, ${name}`);
        } else {
            alert("You are not allowed to visit this website.");
        }
    } else if (age > 22) {
        alert(`Welcome, ${name}`);
    }
});
