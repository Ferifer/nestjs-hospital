import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

export class CommandPrerequisitesException extends HttpException {
  constructor(msg: string) {
    super(msg, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
