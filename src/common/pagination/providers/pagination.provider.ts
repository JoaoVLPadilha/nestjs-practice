import { Injectable, Inject } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class PaginationProvider {
  constructor(
    @Inject(REQUEST)
    private request: Request,
  ) {}
  public async paginationQuery<T extends ObjectLiteral>(
    paginationQuery: PaginationQueryDto,
    repository: Repository<T>,
  ): Promise<T[]> {
    const results = await repository.find({
      take: paginationQuery.limit,
      skip: (paginationQuery.page - 1) * paginationQuery.limit,
    });
    const baseURL =
      this.request.protocol + '://' + this.request.headers.host + '/';
    const newUrl = new URL(this.request.url, baseURL);
    console.log(newUrl);

    // Calculating page numbers
    const totalItems = await repository.count();
    const totalPages = Math.ceil(totalItems / paginationQuery.limit);
    const nextPage =
      paginationQuery.page === totalPages
        ? paginationQuery.page
        : paginationQuery.page + 1;

    const previousPage =
      paginationQuery.page === 1
        ? paginationQuery.page
        : paginationQuery.page - 1;
    return results;
  }
}
