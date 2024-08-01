import { IsOptional } from 'class-validator';

export class PaginatedReqDto {
  @IsOptional()
  per_page?: number = 10;

  @IsOptional()
  page?: number = 1;
}
