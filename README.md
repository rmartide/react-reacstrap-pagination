# React Reactstrap Pagination

Pagination component made using Reactstrap PaginationItem and PaginationLink components.

## Demo

[Live demo](https://codesandbox.io/s/2z5jw7mnkp)

## Props

```js
PaginationComponent.propTypes = {
  // Total number of items
  totalItems: PropTypes.number.isRequired,
  // Number of items displayed each page
  pageSize: PropTypes.number.isRequired,
  // Function to receive the event when a page is selected
  onSelect: PropTypes.func.isRequired,
  // Number of pages being displayed, by default 5
  maxPaginationNumbers: PropTypes.number,
  // Page where the pagination starts, by default 1
  defaultActivePage: PropTypes.number
  // Change text of "First" button
  firstPageText: PropTypes.string
  // Change text of "Previous" button
  previousPageText: PropTypes.string
  // Change text of "Next" button
  nextPageText: PropTypes.string
  // Change text of "Last" button
  lastPageText: PropTypes.string
  // Changes the size of the component. Values: "sm" and "lg". Without the prop the size is normal.
  size: PropTypes.string
}
```

## Usage

```js
<PaginationComponent totalItems={50} pageSize={5} onSelect={this.handleSelected} />
```

## Update 2.0.0

- activePage prop changed to defaultActivePage. Now it correctly changes the numbers if the defaultActivePage is bigger than maxPaginationNumbers.

- Removed use of deprecated method componentWillReceiveProps.

- It is possible to change any props, including defaultActivePage and it will update correctly (using state).

- It was added on 1.0.8 but it's worth to mention, the size prop with the values "sm" or "lg" will make smaller or bigger the component. It was an option from the actual Reactstrap PaginationItem component.





