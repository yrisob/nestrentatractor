"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var _ = require("lodash");
var class_validator_1 = require("class-validator");
var Cat = /** @class */ (function () {
    function Cat() {
        this.id = undefined;
        this.name = undefined;
        this.someUsefull = undefined;
    }
    __decorate([
        class_validator_1.IsInt()
    ], Cat.prototype, "id");
    __decorate([
        class_validator_1.IsString()
    ], Cat.prototype, "name");
    return Cat;
}());
exports.Cat = Cat;
function validateClasses(dto, enterObject) {
    var dtoKeys = Object.getOwnPropertyNames(dto);
    var enterObjectKeys = Object.getOwnPropertyNames(enterObject);
    var resultKey = _.intersection(dtoKeys, enterObjectKeys);
    for (var i = 0; i < resultKey.length; i++) {
        dto[resultKey[i]] = enterObject[resultKey[i]];
    }
    console.log(dto);
    var validator = new class_validator_1.Validator();
    var errors = validator.validateSync(dto);
    if (errors.length > 0) {
        return _.flatMap(errors, function (n) {
            return n.constraints;
        });
    }
    else {
        return undefined;
    }
}
exports.validateClasses = validateClasses;
var catDto = new Cat();
var enterDto = {
    id: '123',
    name: '12',
    someUsefull: '12312'
};
var result = validateClasses(catDto, enterDto);
console.log(result);
