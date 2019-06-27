import React from "react";
import Form from "../Form/Form";
import "./LoginPage.scss";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="LoginPage">
        <aside className="login-image" />
        <section className="login-section">
          <header>
            <h1 className="main-title">Galleria</h1>
          </header>
          <Form />
        </section>
      </div>
    );
  }
}

export default LoginPage;
