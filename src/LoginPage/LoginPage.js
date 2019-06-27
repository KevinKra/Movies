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
        <aside className="login-image" />
        <section className="login-section">
          <header>
            <h1 className="main-title">Galleria</h1>
          </header>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username"> Login</label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              value={this.state.username}
              onChange={this.captureInput}
            />
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.captureInput}
            />
            <button>Sign in</button>
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
