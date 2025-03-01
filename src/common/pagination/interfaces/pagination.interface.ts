export interface Paginated<T> {
  data: T[];
  meta: {
    items: number;
    totalItems: number;
    currentPages: number;
    totalPages: number;
  };
  links: {
    first: string;
    last: string;
    current: string;
    previous: string;
    next: string;
  };
}
