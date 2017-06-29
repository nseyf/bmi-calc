import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      result: "",
      message: ""
    }
this.renderMessage = this.renderMessage.bind(this);
  }

/*
BMI Categories:
<= 15: Very severely underweight
15 - 16: severely underweight
16 - 18.5: underweight
18.5 - 25: Normal
25 - 30: Overweight
30 - 35: Obese Class 1 (Moderately Obese)
35 - 40: Obese Class 2 (Severely Obese)
40+: Obese Class 3 (Very Severely Obese)
*/


updateHeight(e) {

  this.setState({
    height: e.target.value ? parseInt(e.target.value, 10): ""
  }, () => {
    this.setState({result: this.state.weight / (this.state.height / 100) / (this.state.height / 100)}, () => {
      this.renderMessage();
    });



  });
}

updateWeight(e) {
  this.setState({weight: e.target.value ? parseInt(e.target.value, 10): ""}, () => {
    this.setState({result: this.state.weight / (this.state.height / 100) / (this.state.height / 100)}, () => {
      this.renderMessage();
    })
  });
}

renderMessage(){
const { result } = this.state;

  if(result < 15) {
    this.setState({message: "You are very severely underweight"})
  } else if (result > 15 && result < 16) {
    this.setState({message: "You are severely underweight"})
  } else if (result > 16 && result < 18.5) {
    this.setState({message: "You are underweight"})
  } else if (result > 18 && result < 25) {
    this.setState({message: "Your BMI is normal"})
  } else if (result > 25 && result < 30) {
    this.setState({message: "You are overweight"})
  } else if (result > 30 && result < 35) {
    this.setState({message: "You are moderately Obese"})
  } else if (result > 35 && result < 40) {
    this.setState({message: "You are severely obese"})
  } else if (result > 40) {
    this.setState({message: "You are very severely obese"})
  }
}

  render() {

const inputDiv = {
 margin: "50px",
fontWeight: "bold"
}
const inputStyle = {
  borderBottom: "2px solid #f5f5f5",
  padding: "5px"
}
const titleStyle = {
  fontSize: "50px",
  color: "#151515",
  fontWeight: "900"
}
const containerStyle = {
  padding: "50px",
  background: "#fff",
  fontFamily: "'Roboto', cursive",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}
const identifierStyle = {
  fontSize: "20px",
  color: "#151515"
}
console.log(this.state);
    return (

      <div className="App" className="col-xs-12 col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 text-center" style={containerStyle}>
        <div><h1 style={titleStyle}>BMI Calculator</h1></div>
        <div style={inputDiv}><span style={identifierStyle}>Enter your Height(cm): </span><input style={inputStyle} key={this.height} onChange={this.updateHeight.bind(this)} value={this.state.height} />
      </div>
      <div style={inputDiv}><span style={identifierStyle}>Enter your Weight(kg): </span><input style={inputStyle} key={this.weight} onChange={this.updateWeight.bind(this)} value={this.state.weight}/>
      </div>
      <div>
      </div>
        <div>
          <h2 style={{fontWeight: "400"}}>Your BMI is: <span style={{fontWeight: "900"}}>{this.state.result ? this.state.result.toFixed(2): ""}</span></h2>
          <h2>{this.state.message}</h2>

      </div>
      </div>
    );
  }
}

export default App;
