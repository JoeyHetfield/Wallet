import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disableBtn: true,
  };

  handleChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    }, this.validateBtn);
  };

  validateBtn = () => {
    const { email, password } = this.state;
    const minPass = 6;
    const validPassword = password.length >= minPass;
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9]+?\.[a-z]+\.?([a-z]+)?$/i;
    const validEmail = emailRegex.test(email);

    if (validPassword && validEmail) {
      this.setState({
        disableBtn: false,
      });
    } else {
      this.setState({
        disableBtn: true,
      });
    }
  };

  handleLogin = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(userLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, disableBtn } = this.state;
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
          <button
            type="button"
            disabled={ disableBtn }
            onClick={ this.handleLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
