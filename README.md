# React Reactstrap Pagination

Pagination component made using Reactstrap PaginationItem and PaginationLink components.

## Props

```js
PaginationComponent.propTypes = {
  // Total number of items
  totalItems: PropTypes.number.isRequired,
  // Number of items displayed each page
  pageSize: PropTypes.number.isRequired,
  // Function to receive the event when a page is selected
  onSelect: PropTypes.func.isRequired,
  // Number of pages being displayed, by default 5 (1 to 5)
  maxPaginationNumbers: PropTypes.number
}
```

## Usage

```js
  <PaginationComponent totalItems={50} pageSize={5} onSelect={this.handleSelected} />
```