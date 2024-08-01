import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

export class NotFoundExcp extends HttpException {
  constructor(msg: string) {
    super(msg, HttpStatus.NOT_FOUND);
  }
}
