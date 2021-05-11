"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, surName) {
        this.firstName = firstName;
        this.surName = surName;
        this.name = this.firstName + " " + this.surName;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is " + this.name + ".");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, surName, college) {
        var _this = _super.call(this, firstName, surName) || this;
        _this.college = college;
        return _this;
    }
    Student.prototype.greet = function () {
        // if we want we can reuse the parent's greet() method (if we want to extend it)
        _super.prototype.greet.call(this);
        console.log("I study in " + this.college);
        // or just to overwrite it
    };
    return Student;
}(Person));
var maria = new Person("Maria", "Popova");
var ivan = new Student("Ivan", "Ivanov", 'TU-Sofia');
maria.greet();
ivan.greet();
