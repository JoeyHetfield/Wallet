import React, { Component } from 'react';

class WalletForm extends Component {
  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    console.log(data);
  };

  render() {
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
          teste
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

export default WalletForm;
