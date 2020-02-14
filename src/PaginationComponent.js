import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

class PaginationComponent extends Component {
  constructor(props) {
    super(props);

    this.pages = this.getNumberOfPages(this.props);

    this.state = {
      activePage: this.props.defaultActivePage
    };
  }

  getNumberOfPages = props => {
    const auxPages = props.totalItems / props.pageSize;
    let pages = parseInt(auxPages, 10);
    pages += pages !== auxPages ? 1 : 0;
    return pages;
  };

  paginationItems = () => {
    let items = [];
    // Since first and last PaginationNumber depend on activepage there's no reason to have them on the state
    // So we just make the calculations when we need them
    const firstPaginationNumber = this.getFirstPaginationNumber(this.state.activePage);
    const lastPaginationNumber = this.getLastPaginationNumber(firstPaginationNumber);
    items.push(this.firstOrLastPagItem(this.props.firstPageText, 1));
    items.push(this.nextOrPreviousPagItem(this.props.previousPageText, 1, "l"));
    for (
      let i = firstPaginationNumber;
      i <= lastPaginationNumber;
      i++
    ) {
      items.push(this.numberedPagItem(i));
    }
    items.push(
      this.nextOrPreviousPagItem(this.props.nextPageText, this.pages, "r")
    );
    items.push(this.firstOrLastPagItem(this.props.lastPageText, this.pages));
    return items;
  };

  getLastPaginationNumber = (firstPaginationNumber) => {
    const minNumberPages = Math.min(
      this.pages,
      this.props.maxPaginationNumbers
    );
    return firstPaginationNumber + minNumberPages - 1;
  };

  numberedPagItem = i => {
    let minWidth = "43.5px";
    if (this.props.size === "lg") {
      minWidth = "71px"
    } else if (this.props.size === "sm") {
      minWidth = "33px"
    }
    return (
      <PaginationItem
        key={i}
        id={`pagebutton${i}`}
        active={this.state.activePage === i}
        onClick={this.handleClick}
      >
        <PaginationLink style={{ minWidth }}>{i}</PaginationLink>
      </PaginationItem>
    );
  };

  nextOrPreviousPagItem = (name, page, direction) => {
    return (
      <PaginationItem
        key={name}
        disabled={this.state.activePage === page}
        onClick={e => this.handleSelectNextOrPrevious(direction)}
      >
        <PaginationLink>{name}</PaginationLink>
      </PaginationItem>
    );
  };

  firstOrLastPagItem = (name, page) => {
    let event = {
      currentTarget: {
        getAttribute: () => `pagebutton${page}`
      }
    };
    return (
      <PaginationItem
        key={name}
        disabled={this.state.activePage === page}
        onClick={() => this.handleClick(event)}
      >
        <PaginationLink>{name}</PaginationLink>
      </PaginationItem>
    );
  };

  handleClick = event => {
    const newActivePage = parseInt(
      event.currentTarget
        .getAttribute("id")
        .split("pagebutton")
        .pop(),
      10
    );
    this.changePaginationState(newActivePage);
  };

  handleSelectNextOrPrevious = direction => {
    const activePage = this.state.activePage;
    if (
      (direction === "r" && activePage === this.pages) ||
      (direction === "l" && activePage === 1)
    )
      return;

    const newActivePage = direction === "r" ? activePage + 1 : activePage - 1;

    this.changePaginationState(newActivePage);
  };

  changePaginationState = (newActivePage) => {
    this.setState({
      activePage: newActivePage
    });

    this.props.onSelect(newActivePage);
  }

  getFirstPaginationNumber = (activePage) => {
    const distance = Math.floor(this.props.maxPaginationNumbers / 2);
    const newFPNumber = activePage - distance;
    const newLPNumber = activePage + distance;
    let result = 1;
    if (newFPNumber <= distance) {
        result = 1;
    } else if (newLPNumber <= this.pages) {
      result = newFPNumber;
    } else if (newLPNumber >= this.pages) {
      result = this.pages - this.props.maxPaginationNumbers + 1;
    }
    return result;
  };

  render() {
    return <Pagination size={this.props.size}>{this.paginationItems()}</Pagination>;
  }
}

PaginationComponent.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  maxPaginationNumbers: PropTypes.number,
  defaultActivePage: PropTypes.number,
  firstPageText: PropTypes.string,
  previousPageText: PropTypes.string,
  nextPageText: PropTypes.string,
  lastPageText: PropTypes.string,
  size: PropTypes.string
};

PaginationComponent.defaultProps = {
  maxPaginationNumbers: 5,
  activePage: 1,
  firstPageText: "First",
  previousPageText: "Previous",
  nextPageText: "Next",
  lastPageText: "Last"
};

export default PaginationComponent;