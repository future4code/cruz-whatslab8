import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const MessageBox = styled.div`
  position: relative;
  word-wrap: break-word;
  max-width: 40%;
  height: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 450;
  line-height: 1;
  text-align: ${(props) => props.posicao};
  align-self: ${(props) => {
    if (props.posicao === 'direita') {
      return 'flex-end';
    } else {
      return 'flex-start';
    }
  }};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => {
    if (props.posicao === 'direita') {
      return '#dcf8c6';
    } else {
      return '#ffffff';
    }
  }};
  box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 5);
`;

const UsernameContainer = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: #9aac8c;
  font-size: 0.8em;
`;

export class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  onDoubleClick = () => {
    if (window.confirm('Deseja deletar essa mensagem?')) {
      this.props.deleteMessage(this.props.message);
    }
  };

  render() {
    let posicao;
    let username;

    if (this.props.message.user !== 'Bot') {
      posicao = 'esquerda';
      username = (
        <UsernameContainer>{this.props.message.user}</UsernameContainer>
      );
    } 

    return (
      <MessageContainer onDoubleClick={this.onDoubleClick}>
        <MessageBox posicao={posicao}>
          {username}
          {this.props.message.text}
        </MessageBox>
        <MessageBox posicao="direita">
          {<UsernameContainer>Bot</UsernameContainer>}
          {'Olá, tudo bem?, Eu sou um bot.'}
        </MessageBox>
      </MessageContainer>
    );
  }
}
