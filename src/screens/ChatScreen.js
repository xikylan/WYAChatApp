import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Bubble,
  Send,
} from 'react-native-gifted-chat';

export class ChatScreen extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ChatHeader />
        <GiftedChat
          renderSend={(props) => customSend(props)}
          renderTime={() => null}
          renderBubble={(props) => customBubble(props)}
          renderComposer={(props) => customComposer(props)}
          renderInputToolbar={(props) => customInputToolBar(props)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

function customSend(props) {
  return <Send {...props} alwaysShowSend />;
}

function customBubble(props) {
  return (
    <Bubble
      {...props}
      textStyle={{
        left: {
          fontSize: 14,
        },
        right: {
          fontSize: 14,
        },
      }}
      wrapperStyle={{
        left: {
          paddingHorizontal: 2,
          paddingVerticle: 2,
        },
        right: {
          paddingHorizontal: 2,
          paddingVerticle: 2,
        },
      }}
    />
  );
}

function customComposer(props) {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      {/* <CameraButton /> */}
      <Composer
        {...props}
        textInputStyle={{
          borderRadius: 20,
          backgroundColor: '#eee',
          lineHeight: 20,
          paddingHorizontal: 14,
        }}
      />
    </View>
  );
}

function CameraButton() {
  return (
    <TouchableOpacity>
      <Icon name='camera-alt' />
    </TouchableOpacity>
  );
}

function customInputToolBar(props) {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#fff',
        borderTopColor: '#000',
        borderTopWidth: 0,
      }}
    />
  );
}

function ChatHeader({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        containerStyle={{ backgroundColor: '#fff' }}
        centerComponent={
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            Chat
          </Text>
        }
        centerContainerStyle={{
          justifyContent: 'flex-start',
        }}
        leftComponent={
          <Icon
            name='menu'
            type='material'
            color='#000'
            size='22'
            onPress={() => navigation.openDrawer()}
          />
        }
      />
    </View>
  );
}
