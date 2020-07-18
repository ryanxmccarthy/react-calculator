import React, {Component} from 'react';

class Application extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    let name = 'Ryan';

    return (
      <div>
        <h1>Hello {name}</h1>
        <span>This</span>
      </div>
    );
  }
}

export default Application;