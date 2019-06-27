import React, { Component } from "react";
import "./LoginPage.scss";

class LoginPage extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/main");
  };

  render() {
    const { usernameActive, passwordActive, username, password } = this.state;
    return (
      <div className="LoginPage">
        <aside className="login-image" />
        <section className="login-section">
          <header>
            <h1 className="main-title">Galleria</h1>
          </header>
          <form onSubmit={this.handleSubmit}>
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
            <button className="sign-in">Sign in</button>
            <div className="new-member">
              <p>Don't have an account?</p>
              <button className="sign-up">Sign up now.</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default LoginPage;
