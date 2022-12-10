import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string } from 'prop-types';
import { userCurrency, saveDespesa } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valueInput: '',
    descriptionInput: '',
    selectCoin: 'USD',
    selectMethod: 'Dinheiro',
    selectTag: 'Alimentação',
  };

  componentDidMount() {
    this.codeApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const
      { valueInput, descriptionInput, selectCoin, selectMethod, selectTag } = this.state;
    const { dispatch, expenses } = this.props;
    const exchangeFromAPi = await this.callApi();
    // console.log(expenses);
    const newStateExpenses = {
      id: expenses.length,
      value: valueInput,
      description: descriptionInput,
      currency: selectCoin,
      method: selectMethod,
      tag: selectTag,
      exchangeRates: exchangeFromAPi,
    };
    dispatch(saveDespesa(newStateExpenses));
    this.setState({
      valueInput: '',
      descriptionInput: '',
    });
  };

  callApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    return data;
  };

  codeApi = async () => {
    const { dispatch } = this.props;
    const callApiConst = await this.callApi();
    const nameMoney = (Object.keys(callApiConst));
    dispatch(userCurrency(nameMoney));
  };

  render() {
    const { currencies } = this.props;
    const {
      valueInput, descriptionInput, selectCoin, selectMethod, selectTag } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="value-input">
            Valor
            <input
              value={ valueInput }
              id="value-input"
              type="text"
              data-testid="value-input"
              onChange={ this.handleChange }
              name="valueInput"
            />
          </label>
        </div>

        <div>
          <label htmlFor="description-input">
            Descrição da Despesa
            <input
              value={ descriptionInput }
              id="description-input"
              type="text"
              data-testid="description-input"
              onChange={ this.handleChange }
              name="descriptionInput"

            />
          </label>
        </div>
        <select
          value={ selectCoin }
          id="currency-input"
          data-testid="currency-input"
          onChange={ this.handleChange }
          name="selectCoin"
        >
          { currencies.map((coin) => (
            <option key={ coin } value={ coin }>
              { coin }
            </option>
          )) }
        </select>
        <select
          value={ selectMethod }
          id="method-input"
          data-testid="method-input"
          onChange={ this.handleChange }
          name="selectMethod"
        >
          <option>
            Dinheiro
          </option>
          <option>
            Cartão de crédito
          </option>
          <option>
            Cartão de débito
          </option>
        </select>
        <select
          value={ selectTag }
          id="tag-input"
          data-testid="tag-input"
          onChange={ this.handleChange }
          name="selectTag"
        >
          <option>
            Alimentação
          </option>
          <option>
            Lazer
          </option>
          <option>
            Trabalho
          </option>
          <option>
            Transporte
          </option>
          <option>
            Saúde
          </option>
        </select>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: func.isRequired,
  currencies: arrayOf(string).isRequired,
  expenses: arrayOf(string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
