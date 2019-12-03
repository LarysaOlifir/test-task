import React, { Fragment } from 'react';
import Comments from './containers/Comments';
import { Navbar } from 'react-bootstrap';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Comments test app
        </Navbar.Brand>
      </Navbar>
      <Comments/>
    </Fragment>
  );  
}

export default App;
