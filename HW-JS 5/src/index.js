function createNewUser() {
    let firstName = prompt("Please enter your first name:");
    let lastName = prompt("Please enter your last name:");
    let birthday = prompt("Please enter your date of birth (dd.mm.yyyy):");

    // Создаем объект newUser
    const newUser = {
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getAge() {
            const [day, month, year] = this.birthday.split('.').map(Number);
            const birthDate = new Date(year, month - 1, day);
            const ageDifMs = Date.now() - birthDate.getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        getPassword() {
            const yearOfBirth = this.birthday.split('.')[2];
            return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${yearOfBirth}`;
        },
        // Геттеры и сеттеры для firstName, lastName и birthday
        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        get birthday() {
            return birthday;
        },
        setFirstName(newFirstName) {
            firstName = newFirstName;
        },
        setLastName(newLastName) {
            lastName = newLastName;
        },
        setBirthday(newBirthday) {
            birthday = newBirthday;
        }
    };

    return newUser;
}

// Создаем пользователя и вызываем методы getAge и getPassword
const user = createNewUser();
console.log(user.getLogin());
console.log(`Age: ${user.getAge()}`);
console.log(`Password: ${user.getPassword()}`);

// Пример использования сеттеров для изменения имени, фамилии и даты рождения
user.setFirstName("John");
user.setLastName("Doe");
user.setBirthday("01.01.2000");
console.log(user.getLogin());
console.log(`Age: ${user.getAge()}`);
console.log(`Password: ${user.getPassword()}`);
