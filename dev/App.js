import React from 'react';
import PaginationComponent from '../src/PaginationComponent';
//import PaginationComponent from '../dist/react-reactstrap-pagination.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'reactstrap';

class App extends React.Component {
  state = {
    defaultActivePage: 1,
    size: 'lg',
    maxPaginationNumbers: 10
  }

  handleSelected = option => {
    this.setState({defaultActivePage: option})
    console.log('selected', option);
  };

  render() {
    return (
      <>
        <div>
          <h1>Boilerplate</h1>
          <PaginationComponent
            size={this.state.size}
            totalItems={31}
            pageSize={1}
            onSelect={this.handleSelected}
            maxPaginationNumbers={this.state.maxPaginationNumbers}
            defaultActivePage={this.state.defaultActivePage}
            hasFirstLastNavigation={false}
            hasNextPreviousNavigation={false}
          />
        </div>
        <div>
          <Button color="primary" onClick={()=>{this.setState({defaultActivePage:11, maxPaginationNumbers: 5})}}>Change default active page</Button>
        </div>
      </>
    );
  }
}

export default App;
