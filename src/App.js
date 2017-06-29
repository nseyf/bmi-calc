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

}
const titleStyle = {
  fontSize: "50px",
  color: "#151515"
}
const containerStyle = {
  background: "white",
  padding: "50px",
  marginTop: "40px",
  fontFamily: "'Fredericka the Great', cursive",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}
const identifierStyle = {
  fontSize: "20px",
  color: "#151515"
}

      console.log(this.state)
    return (

      <div className="App" className="col-xs-12 col-lg-6 col-lg-offset-3 col-md-6 text-center" style={containerStyle}>
        <h1 style={titleStyle}>BMI Calculator</h1>
        <div style={inputDiv}><span style={identifierStyle}>Enter your Height: </span><input key={this.height} onChange={this.updateHeight.bind(this)} value ={this.state.height} />
      </div>
      <div style={inputDiv}><span style={identifierStyle}>Enter your Weight: </span><input key={this.weight} onChange={this.updateWeight.bind(this)} value={this.state.weight}/>
      </div>
      <div>
        <h2>Your BMI is: {this.state.result}</h2>
        <h2>This classifies you as Obese</h2>
      </div>
      <div>

      </div>
      </div>
    );
  }
}

export default App;
