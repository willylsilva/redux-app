import React, { Component } from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "Danilo", footer: "FIAP", date: "26/06/2019" };
    this.updateHeader = this.updateHeader.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateHeader() {
    this.setState({ name: "FIAP" })
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  async componentDidMount(){
    await fetch("https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs/1")
      .then(response => response.json())
      .then(data => this.setState({name: data.title}))
  }

  render() {
    return (
      <>
        <Header name={this.state.name} />
        <div style={{width: '100vw'}}>
          <button className="MyButton" onClick={this.updateHeader}>update header</button>
          <form className="App" style={{ paddingTop: '10px' }} onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.name} onChange={this.handleChange} />
            <button>
              Click me!
            </button>
            <h1>texto</h1>
          </form>
        </div>
        <Footer footer={this.state.footer} date={this.state.date}/>
      </>
    );
  }
}
export default App;