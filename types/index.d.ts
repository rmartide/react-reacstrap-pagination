import * as React from "react";

export interface PaginationComponentProps {
  totalItems: number;
  pageSize: number;
  onSelect: (option: number) => void;
  maxPaginationNumbers?: number;
  defaultActivePage?: number;
  firstPageText?: string;
  previousPageText?: string;
  nextPageText?: string;
  lastPageText?: string;
  size?: string;
  hasFirstLastNavigation?: boolean;
  hasNextPreviousNavigation?: boolean;
}

export default class PaginationComponent extends React.Component<
  PaginationComponentProps
> {
  paginationItems(): any;
  getFirstPaginationNumber(activePage: number, pages: number): number;
  getLastPaginationNumber(firstPaginationNumber: number, pages: number): number;
  numberedPagItem(i: number, activePage: number): any;
  nextOrPreviousPagItem(name: any, page: number, direction: string): any;
  firstOrLastPagItem(name: string, page: number): any;
  handleClick(event: any): any;
  handleSelectNextOrPrevious(direction: string): any;
  changePaginationState(newActivePage: number): any;
}
