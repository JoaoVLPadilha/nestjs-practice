import { Injectable, Inject } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { Paginated } from '../interfaces/pagination.interface';

@Injectable()
export class PaginationProvider {
  constructor(
    @Inject(REQUEST)
    private request: Request,
  ) {}
  public async paginationQuery<T extends ObjectLiteral>(
    paginationQuery: PaginationQueryDto,
    repository: Repository<T>,
  ): Promise<Paginated<T>> {
    const results = await repository.find({
      take: paginationQuery.limit,
      skip: (paginationQuery.page - 1) * paginationQuery.limit,
    });
    const baseURL = this.request.protocol + '://' + this.request.headers.host;
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

    const finalResponse: Paginated<T> = {
      data: results,
      meta: {
        currentPages: paginationQuery.page,
        totalItems: totalItems,
        items: results.length,
        totalPages: totalPages,
      },
      links: {
        current: `${baseURL + newUrl.pathname + newUrl.search}`,
        first: `${baseURL + newUrl.pathname}${'?limit=' + paginationQuery.limit + '&page=1'}`,
        last: `${baseURL + newUrl.pathname}${'?limit=' + paginationQuery.limit + '&page=' + totalPages}`,
        next: `${baseURL + newUrl.pathname}${'?limit=' + paginationQuery.limit + '&page=' + nextPage}`,
        previous: `${baseURL + newUrl.pathname}${'?limit=' + paginationQuery.limit + '&page=' + previousPage}`,
      },
    };

    return finalResponse;
  }
}
