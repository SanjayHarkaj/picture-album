import React, { Component } from "react";
import HeaderBar from './common/HeaderBar'
export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        {this.props.children}
      </div>
    );
  }
}