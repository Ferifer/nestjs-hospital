import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isRateValid', async: false })
export class IsRateValidConstraint implements ValidatorConstraintInterface {
  validate(rate: number, args: ValidationArguments) {
    return rate >= 0.5 && rate <= 5;
  }

  defaultMessage(args: ValidationArguments) {
    return `Rate must be between 0.5 and 5 inclusive`;
  }
}
