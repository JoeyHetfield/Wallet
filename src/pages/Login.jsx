import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
            value={ email }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
            value={ password }
          />
          <button type="button">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
