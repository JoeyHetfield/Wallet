import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  componentDidUpdate() {
    this.totalDespesas();
  }

  totalDespesas = () => {
    const { expenses } = this.props;
    const expenseReduce = expenses.reduce((total, { value, exchangeRates, currency }) => {
      const valorAtual = exchangeRates[currency].ask;
      return total + Number(value * valorAtual);
    }, 0);
    return expenseReduce.toFixed(2);
  };

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
          <h1>Despesa total:</h1>
          <p data-testid="total-field">
            {this.totalDespesas()}
          </p>
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
