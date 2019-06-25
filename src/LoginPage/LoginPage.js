import React, { Component } from "react";
import "./LoginPage.scss";

class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="LoginPage">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"> Login</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.captureInput}
          />
          <label htmlFor="password"> Password</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.captureInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
