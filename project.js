import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {innerWidth:window.innerWidth, innerHeight:window.innerHeight};

    window.addEventListener("resize", () => {
      console.log("resize: ", window.innerWidth, window.innerHeight);
      this.setState((oldState) => ({...oldState, innerWidth:window.innerWidth, innerHeight:window.innerHeight}));
    });

  }


  render() {

    let divSize = (this.state.innerHeight < this.state.innerWidth) ? this.state.innerHeight : this.state.innerWidth;

    let fontSize = `${Math.floor(divSize / 10)}px`;
    let minDivHeight = `Math.floor(this.state.innerHeight/2)`;
  
  
    return <div className="mydiv" style={{color:"red","font-size":fontSize}}>{this.props.title} {fontSize}</div>  }
}

render(<App title="Hello world"/>, document.querySelector('#app'));