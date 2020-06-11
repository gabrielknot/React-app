import React,{Component} from 'react'
import AnimatedNumber from "animated-number-react";
 
export default class App extends Component {
  state = {
    value: this.props.numero || 1500,
  };
  formatValue = (value) => value.toFixed(0);
  render() {
    return (
      <div>

        <AnimatedNumber
          value={this.state.value}
          formatValue={this.formatValue}
        />
      </div>
    );
  }
}