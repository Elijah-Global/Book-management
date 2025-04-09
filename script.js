// Step 1. 
// Library Book Management
// - Create a `Book` class with properties `title`, `author`, and `yearPublished`.
// - Add a method `getBookInfo()` that returns a formatted string of the book details.
// - Create multiple book instances and display their information.
class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished;
    }
    getBookInfo(){
        return `Title: ${this.title}\nAuthor: {this.author}\n Yearpublished: {this.yearPublished}`;

    }
}

// Create multiple book instances
const book1 = new Book("The Secret of Prosperity", "Bishop Oyedepo", 2022);
const book2 = new Book("Marriage", "Jonathan Laure ", 2000);
const book3 = new Book("The book of life", "John Cope", 2015);

// Display book information
console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
console.log(book3.getBookInfo());


// Step 2.
// Employee Payroll System
// - Create an `Employee` class with properties `name`, `position`, and `salary`.
// - Add a method `getAnnualSalary()` to return the total salary for a year.
// - Create instances for multiple employees and display their annual salaries.
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12; // Calculate annual salary
    }
}

// Create multiple employee instances
const employee1 = new Employee("Durojaye Elijah", "Web Developer", 8000);
const employee2 = new Employee("Blessed Opoke", "Project Manager", 5000);
const employee3 = new Employee("Omoboade Dorcas", "Designer", 4000);

// Display annual salaries
console.log(`${employee1.name}'s Annual Salary: $${employee1.getAnnualSalary()}`);
console.log(`${employee2.name}'s Annual Salary: $${employee2.getAnnualSalary()}`);
console.log(`${employee3.name}'s Annual Salary: $${employee3.getAnnualSalary()}`);

// Step 3.
// Vehicle Registration System (Inheritance)
// - Create a `Vehicle` class with properties `brand`, `model`, and `year`.
// - Create a `Car` subclass that extends `Vehicle` and adds a new property `fuelType`.
// - Add a method `getCarDetails()` to return the car’s details.
// - Create multiple car instances and display their information.
class Vehicle {
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, fuelType) {
        super(brand, model, year); // Call the parent class constructor
        this.fuelType = fuelType;
    }

    getCarDetails() {
        return `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nFuel Type: ${this.fuelType}`;
    }
}

// Create multiple car instances
const car1 = new Car("Toyota", "Corolla", 2019, "Petrol");
const car2 = new Car("Benz", "Model S", 2023, "Electric");
const car3 = new Car("Ford", "Mustang", 2020, "Diesel");

// Display car information
console.log(car1.getCarDetails());
console.log(car2.getCarDetails());
console.log(car3.getCarDetails());

// Step 4.
// Online Shopping Cart (Static Methods)
// - Create a `ShoppingCart` class with a static method `calculateTotal(cartItems)`.
// - The method should take an array of item prices and return the total price.
// - Test the static method with different shopping cart values.
class ShoppingCart {
    static calculateTotal(cartItems) {
        return cartItems.reduce((total, price) => total + price, 0); // Sum up all item prices
    }
}

// Test the static method with different shopping cart values
const cart1 = [10, 5, 20, 3]; // Example cart 1
const cart2 = [15, 25, 30];      // Example cart 2
const cart3 = [100, 200, 50];     // Example cart 3

console.log(`Total for cart1: $${ShoppingCart.calculateTotal(cart1)}`);
console.log(`Total for cart2: $${ShoppingCart.calculateTotal(cart2)}`);
console.log(`Total for cart3: $${ShoppingCart.calculateTotal(cart3)}`);

// Step 5.
// Create a `BankAccount` class with properties `owner`, `balance`, and methods:
//   - `deposit(amount)`: Adds the amount to balance.
//   - `withdraw(amount)`: Deducts the amount from balance (if sufficient funds).
//   - `getBalance()`: Returns the current balance.
// - Create multiple accounts and perform transactions.
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.owner} deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.owner} withdrew $${amount}. New balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    getBalance() {
        return `Current balance for ${this.owner}: $${this.balance}`;
    }
}

// Create multiple accounts
const account1 = new BankAccount("OPe", 800);
const account2 = new BankAccount("Quadri", 400);
const account3 = new BankAccount("Zainab", 2200);

// Perform transactions
account1.deposit(500);
account1.withdraw(300);
console.log(account1.getBalance());

account2.withdraw(600); // Insufficient funds
account2.deposit(200);
console.log(account2.getBalance());

account3.withdraw(1500);
console.log(account3.getBalance());