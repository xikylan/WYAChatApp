import React from 'react';
import { View, Keyboard } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Bubble,
  Send,
  Actions,
} from 'react-native-gifted-chat';

import { useState } from 'react';

export function ChatScreen() {
  const [message, setMessage] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'John Apple',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  function onSend(messages = []) {
    setMessage(GiftedChat.append(message, messages));
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ChatHeader />
      <GiftedChat
        keyboardShouldPersistTaps='handled'
        renderActions={(props) => customActions(props)}
        bottomOffset={20}
        renderSend={(props) => customSend(props)}
        renderTime={() => null}
        renderBubble={(props) => customBubble(props)}
        renderComposer={(props) => customComposer(props)}
        renderInputToolbar={(props) => customInputToolBar(props)}
        messages={message}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}

function customActions(props) {
  return (
    <Actions
      {...props}
      containerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPressActionButton={() => Keyboard.dismiss()}
      icon={() => <Icon name='camera-alt' color='#999' size={20} />}
    />
  );
}

function customSend(props) {
  return (
    <Send
      {...props}
      alwaysShowSend
      containerStyle={{}}
      textStyle={{
        color: '#D54AFF',
      }}
    />
  );
}

function customBubble(props) {
  return (
    <Bubble
      {...props}
      textStyle={{
        left: {
          fontSize: 16,
          paddingHorizontal: 3,
          paddingVertical: 3,
          color: '#eee',
        },
        right: {
          fontSize: 16,
          paddingHorizontal: 3,
          paddingVertical: 3,
        },
      }}
      wrapperStyle={{
        left: {
          borderRadius: 20,
          backgroundColor: '#222',
        },
        right: {
          borderRadius: 20,
          backgroundColor: '#D54AFF',
        },
      }}
    />
  );
}

function customComposer(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <Composer
        {...props}
        placeholderTextColor='#888'
        keyboardAppearance='dark'
        textInputStyle={{
          lineHeight: 19,
          color: '#eee',
        }}
      />
    </View>
  );
}

function customInputToolBar(props) {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        borderRadius: 20,
        borderTopWidth: 0,
        backgroundColor: '#222',
        marginHorizontal: 20,
      }}
    />
  );
}

function ChatHeader({ navigation }) {
  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        containerStyle={{
          backgroundColor: '#111',
          borderBottomColor: 'transparent',
        }}
        centerComponent={{
          text: 'Chat',
          style: { fontWeight: 'bold', fontSize: 16, color: '#eee' },
        }}
        rightComponent={{ icon: 'people', color: '#eee' }}
      />
    </View>
  );
}
