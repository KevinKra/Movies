import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Form.scss";

export default class Form extends Component {
  state = {
    username: "",
    password: "",
    usernameActive: false,
    passwordActive: false
  };

  toggleFocus = target => {
    const toggle = this.state[target];
    this.setState({ [target]: !toggle });
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { usernameActive, passwordActive, username, password } = this.state;
    return (
      <form className="form-input" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <div className="input-wrapper">
          <label
            htmlFor="username"
            className={
              usernameActive || username ? "text-inside" : "text-above"
            }
          >
            Login
          </label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={this.captureInput}
            onFocus={() => this.toggleFocus("usernameActive")}
            onBlur={() => this.toggleFocus("usernameActive")}
          />
        </div>
        <div className="input-wrapper">
          <label
            htmlFor="password"
            className={
              passwordActive || password ? "text-inside" : "text-above"
            }
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={this.state.password}
            onChange={this.captureInput}
            onFocus={() => this.toggleFocus("passwordActive")}
            onBlur={() => this.toggleFocus("passwordActive")}
          />
        </div>
        <Link to="/main" className="sign-in">
          Sign in
        </Link>
        <div className="new-member">
          <p>Don't have an account?</p>
          <button className="sign-up">Sign up now.</button>
        </div>
      </form>
    );
  }
}
