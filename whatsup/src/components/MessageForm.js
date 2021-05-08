import React from 'react';
import styled from 'styled-components'

const MessageFormContainer = styled.form`
  display: grid;
  grid-template-columns: 100px 1fr 75px;
  gap: 10px;
  height: 60px;
  padding: 10px;
`

const UserInput = styled.input`
  width: 100px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`

const TextInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`

const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`

export class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      valorUsuario: '',
      textoValor: ''
    }
  }

  onChangeUser = (event) => {
    this.setState({valorUsuario: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({textoValor: event.target.value})
  }

  onSendMessage = (event) => {
    event.preventDefault()
    const message = {
      user: this.state.valorUsuario,
      text: this.state.textoValor
    }

    this.props.addMessage(message)

    this.setState({textoValor: ''})
  }

  render() {
    return (
      <MessageFormContainer onSubmit={this.onSendMessage}>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.valorUsuario}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textoValor}/>
        <SendButton>Enviar</SendButton>
      </MessageFormContainer>
    );
  }
}