"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const class_validator_1 = require("class-validator");
function validateClasses(dto, enterObject) {
    const dtoKeys = Object.getOwnPropertyNames(dto);
    const enterObjectKeys = Object.getOwnPropertyNames(enterObject);
    const resultKey = _.intersection(dtoKeys, enterObjectKeys);
    for (let i = 0; i < resultKey.length; i++) {
        dto[resultKey[i]] = enterObject[resultKey[i]];
    }
    const validator = new class_validator_1.Validator();
    const errors = validator.validateSync(dto);
    if (errors.length > 0) {
        return _.map(errors, n => {
            return n.constraints;
        });
    }
    else {
        return undefined;
    }
}
exports.validateClasses = validateClasses;
function getEntityMadeOfDto(entity, dto) {
    const dtoKeys = Object.getOwnPropertyNames(dto);
    const entityObjectKeys = Object.getOwnPropertyNames(entity);
    const resultKey = _.intersection(dtoKeys, entityObjectKeys);
    if (!resultKey && resultKey.length === 0) {
        return undefined;
    }
    for (let i = 0; i < resultKey.length; i++) {
        if (resultKey[i].toLowerCase() !== 'id') {
            entity[resultKey[i]] = dto[resultKey[i]];
        }
    }
    return entity;
}
exports.getEntityMadeOfDto = getEntityMadeOfDto;
//# sourceMappingURL=validate.class.js.map