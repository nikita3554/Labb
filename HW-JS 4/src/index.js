function createNewUser() {
    let firstName = prompt("Please enter your first name:");
    let lastName = prompt("Please enter your last name:");

    // Создаем объект newUser
    const newUser = {
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        // Геттеры и сеттеры для firstName и lastName
        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        setFirstName(newFirstName) {
            firstName = newFirstName;
        },
        setLastName(newLastName) {
            lastName = newLastName;
        }
    };

    return newUser;
}

// Создаем пользователя и вызываем метод getLogin
const user = createNewUser();
console.log(user.getLogin());

// Пример использования сеттеров для изменения имени и фамилии
user.setFirstName("John");
user.setLastName("Doe");
console.log(user.getLogin());
