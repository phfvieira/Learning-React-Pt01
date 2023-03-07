import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  /*  constructor(props) {
      super(props);
      this.handlePClick = this.handlePClick.bind(this);
  
      this.state = {
        name: 'Pablo Henrique',
        counter: 0
      };
    } */
  state = {
    name: 'Pablo Henrique',
    counter: 0
  };
  handlePClick = () => {
    this.setState({ name: 'Pablito' })
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });

  }

  render() {
    //const name = this.state.name;
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React  {counter}
          </a>
        </header>
      </div>
    );
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
