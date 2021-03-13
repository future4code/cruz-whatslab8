import React from "react";
import styled from "styled-components";
import { MessageForm } from "./components/MessageForm";
import { Message } from "./components/Message";

const AppContainer = styled.div`
  max-width: 100vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #7b68ee;
  border: 4px solid blue;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  padding: 30px;
  border: 4px groove green;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] });
  };

  deleteMessage = (message) => {
    this.setState({
      messages: this.state.messages.filter((msg) => msg !== message)
    });
  };

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {this.state.messages.map((message, index) => (
            <Message
              deleteMessage={this.deleteMessage}
              message={message}
              key={index}
            ></Message>
          ))}
        </MessagesContainer>
        <MessageForm addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;