import * as _ from 'lodash';
import { validate, IsInt, IsString, Validator } from 'class-validator';

export function validateClasses(dto: any, enterObject: any): any {
  const dtoKeys = Object.getOwnPropertyNames(dto);
  const enterObjectKeys = Object.getOwnPropertyNames(enterObject);
  const resultKey = _.intersection(dtoKeys, enterObjectKeys);

  for (let i = 0; i < resultKey.length; i++) {
    dto[resultKey[i]] = enterObject[resultKey[i]];
  }

  const validator = new Validator();

  const errors = validator.validateSync(dto);
  if (errors.length > 0) {
    return _.map(errors, n => {
      return n.constraints;
    });
  } else {
    return undefined;
  }
}
