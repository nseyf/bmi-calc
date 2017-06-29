import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      result: ""
    }
  }

updateHeight(e) {
  this.setState({height: e.target.value ? parseInt(e.target.value): ""})
}

updateWeight(e) {
  this.setState({weight: e.target.value ? parseInt(e.target.value): ""})
}


  render() {

const inputDiv = {
 margin: "50px",
 textAlign: "center"
}
const titleStyle = {
  textAlign: "center"
}
const containerStyle = {
  background: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

      console.log(this.state)
    return (

      <div className="App" className="col-xs-12 col-lg-4 col-md-6" style={containerStyle}>
        <h1 style={titleStyle}>BMI Calculator</h1>
        <div style={inputDiv}><span>Enter your Height: </span><input key={this.height} onChange={this.updateHeight.bind(this)} value ={this.state.height} />
      </div>
      <div style={inputDiv}><span>Enter your Weight: </span><input key={this.weight} onChange={this.updateWeight.bind(this)} value={this.state.weight}/>
      </div>
      <div>
        Result: {this.state.result}
      </div>
      </div>
    );
  }
}

export default App;
