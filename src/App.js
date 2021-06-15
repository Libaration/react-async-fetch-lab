import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }
  async componentDidMount() {
    const response = await fetch('http://api.open-notify.org/astros.json');
    const data = await response.json();
    this.setState({ people: data.people });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.people.map((person) => {
          return person.name;
        })}
      </div>
    );
  }
}

export default App;
