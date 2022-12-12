import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Componente Login', () => {
  test('Se o campo de digitar email e senha existem', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  test('Se o botão Entrar existe', () => {
    renderWithRouterAndRedux(<App />);
    const loginBtn = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(loginBtn).toBeInTheDocument();
  });
  test('Se dá para digitar nos inputs', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    userEvent.type(emailInput, 'joey@teste.com');
    expect(emailInput.value).toBe('joey@teste.com');
    userEvent.type(passwordInput, '25267664');
    expect(passwordInput.value).toBe('25267664');
  });
  test('Se dá para clicar no botão e muda de pagina', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const loginBtn = screen.getByRole('button', {
      name: /entrar/i,
    });
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);
    expect(loginBtn).toBeInTheDocument();
    userEvent.type(emailInput, 'joey2@teste.com');
    expect(emailInput.value).toBe('joey2@teste.com');
    userEvent.type(passwordInput, '25267664');
    expect(passwordInput.value).toBe('25267664');
    userEvent.click(loginBtn);
    expect(history.location.pathname).toBe('/carteira');
  });
});

describe('Componente Wallet', () => {
  test('Se possui o texto de Despesa total', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const despesaTotal = screen.getByRole('heading', {
      name: /despesa total:/i,
    });
    expect(despesaTotal).toBeInTheDocument();
  });
  test('Se os inputs existem e é possivel escrever neles', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const valorInput = screen.getByRole('textbox', {
      name: /valor/i,
    });
    const descriptInput = screen.getByRole('textbox', {
      name: /descrição da despesa/i,
    });

    expect(valorInput).toBeInTheDocument();
    expect(descriptInput).toBeInTheDocument();
    userEvent.type(valorInput, '2275');
    expect(valorInput.value).toBe('2275');
    userEvent.type(descriptInput, 'descrevendo');
    expect(descriptInput.value).toBe('descrevendo');
  });
});
