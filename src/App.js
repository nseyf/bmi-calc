import React, { Component } from 'react';


// BMI is calculated by dividing a person's weight in kilograms by their
// height in metres, then dividing the result by the height in metres again.

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      height: "",
      weight: "",
      result: "",
      message: ""
    }

this.renderBMIClassMessage = this.renderBMIClassMessage.bind(this);
this.updateUserHeight = this.updateUserHeight.bind(this);
this.updateUserWeight = this.updateUserWeight.bind(this);
  }


updateUserHeight(e) {
  // Updates state with user input for their height converted to a decimal (base 10).
  this.setState({
    height: e.target.value ? parseInt(e.target.value, 10): ""
        }, () => {
        // Once state has been update with the height value, setState is then called
        // to calculate the BMI. As the app uses CM for height input state height is
        // converted to metres.
       this.setState({
           result: this.state.weight / (this.state.height / 100) / (this.state.height / 100)
                }, () => {
                  // Finally, the renderMessage function is called to classify
                  // the result BMI score within the categories.
                       this.renderBMIClassMessage();
                     }
                   )
                 }
               )
             }

updateUserWeight(e) {
  // Updates state with user weight input converted to a decimal (base 10).
  this.setState({
    weight: e.target.value ? parseInt(e.target.value, 10): ""
    }, () => {
      // Once state has been update with the weight value, setState is then called
      // to calculate the BMI. Once again height is converted to metres.
      this.setState({
        result: this.state.weight / (this.state.height / 100) / (this.state.height / 100)
             }, () => {
               // Finally, the renderMessage function is called to classify the result BMI score within the categories.
                  this.renderBMIClassMessage();
                }
              )
            }
          )
        }

// In both updateHeight and updateWeight ternary operators are used
// when setting state to ensure that the app does not crash trying to
// calculate BMI with data it does not have.



renderBMIClassMessage(){
const { result } = this.state;
// BMI values within certain ranges indicate different classifications of physical health.
// renderMessage takes the result from state then sets message state to a different string
// indicating which classication the user falls under. This then causes the app to re-render
// displaying this information to the user.

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

// Styles

const inputDiv = {
 margin: "50px"
}
const inputStyle = {
  border: "none",
  background: "white",
  padding: "5px",
  borderBottom: "3px solid #f5f5f5",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}
const titleStyle = {
  color: "white",
  letterSpacing: "2px",
  fontWeight: "900"
}
const containerStyle = {
  padding: "50px",
backgroundImage: "linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)",
  fontFamily: "'Roboto', cursive",

}

    return (

      <div className="App col-xs-12 col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 text-center"
      style={containerStyle}>
        <div>
        <h1 style={titleStyle}>BMI CALCULATOR</h1>
        </div>
        <div style={inputDiv}>
        <input style={inputStyle} placeholder="Enter your Height (cm)"
        key={this.height}
        onChange={this.updateUserHeight}
        value={this.state.height} />
      </div>
      <div style={inputDiv}>
      <input style={inputStyle} placeholder="Enter your Weight (kg)"
      key={this.weight}
      onChange={this.updateUserWeight}
      value={this.state.weight}/>
      </div>
      <div>
      </div>
        <div>
          <h2 style=
          {{fontWeight: "100", color: "white"}}>
          Your BMI is: <span style={{fontSize: "50px", fontWeight: "900"}}>
          {this.state.result ? this.state.result.toFixed(2): ""}
          </span></h2>
          <h2 style={{fontWeight: "900", color: "white"}}>
          {this.state.message}
          </h2>

      </div>
      </div>
    );
  }
}

export default App;
