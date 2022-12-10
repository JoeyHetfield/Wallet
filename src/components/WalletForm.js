import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string } from 'prop-types';
import { userCurrency } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    this.codeApi();
  }

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
    return (
      <form>
        <div>
          <label htmlFor="value-input">
            Valor
            <input id="value-input" type="text" data-testid="value-input" />
          </label>
        </div>

        <div>
          <label htmlFor="description-input">
            Descrição da Despesa
            <input id="description-input" type="text" data-testid="description-input" />
          </label>
        </div>
        <select data-testid="currency-input">
          { currencies.map((coin) => (
            <option key={ coin } value={ coin }>
              { coin }
            </option>
          )) }
        </select>
        <select data-testid="method-input">
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
        <select data-testid="tag-input">
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: func.isRequired,
  currencies: arrayOf(string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
