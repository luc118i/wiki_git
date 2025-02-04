import styled from "styled-components";
/* Importando a fonte Roboto Mono diretamente do Google Fonts */

export const ItemConteiner = styled.div`
  width: 80%;
  background-color: #2a2a2a; /* Fundo escuro para contraste */
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-size: 32px;
    color: #fafafa;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #fafafa50;
    margin-bottom: 10px;
    font-style: italic;
  }

  a {
    color: #5cacee;
    text-decoration: none;
    margin-bottom: 10px;
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    margin: 20px 0;
    width: 100%;
    border: 1px solid #fafafa20;
  }

  button {
    background-color: #e60000;
    color: #fafafa;

    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6000040;
    }

    &:focus {
      outline: none;
    }
  }
  .verMais {
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
  }
  .verMais:hover {
    text-decoration: none;
  }
  .nameRepositorio {
    font-family: "Roboto Mono", monospace;
  }
  .nomeUsuario {
    font-family: "Roboto Mono", monospace;
    font-size: 20px;
    color: #fafafa;
    margin-bottom: 8px;
  }
`;
