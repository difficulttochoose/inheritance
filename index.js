'use strict';

/*Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.*/

class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        if (year > new Date().getFullYear() || (new Date().getFullYear() - year) > 5) {
            throw new RangeError();
        }
        this._year = year;
    }

    getCourse() {
        return new Date().getFullYear() - this._year;
    }
}

const stu = new Student('Vasya', 'Pupkin', 2019);
const user = new User('Vasya2', 'Pupkin2');
console.log(stu.getCourse());
console.log(stu.getFullName());


