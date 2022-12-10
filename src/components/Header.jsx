import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  componentDidMount() {
    const { expenses } = this.props;
    console.log(expenses.value);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          <p>
            {' '}
            { email }
            {' '}
          </p>
        </div>
        <div>
          <h1>Despesa total:  </h1>
          <p data-testid="total-field"> 0 </p>
          <p data-testid="header-currency-field"> BRL </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
