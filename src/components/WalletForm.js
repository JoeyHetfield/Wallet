import React, { Component } from 'react';

class WalletForm extends Component {
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
      </form>
    );
  }
}

export default WalletForm;
