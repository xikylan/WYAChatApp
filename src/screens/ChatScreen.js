import React from 'react';
import { View, Keyboard, SafeAreaView } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
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
        listViewProps={{ keyboardDismissMode: 'on-drag' }}
        keyboardShouldPersistTaps='handled'
        renderActions={() => customActions()}
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
      <SafeAreaView style={{ backgroundColor: '#111' }} />
    </View>
  );
}

function customSend(props) {
  return (
    <Send
      {...props}
      alwaysShowSend
      containerStyle={{
        borderTopWidth: 0,
      }}
      textStyle={{
        color: '#D54AFF',
      }}
    />
  );
}

function customActions() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Actions
        icon={() => <Icon name='photo' color='#666' />}
        onPressActionButton={() => Keyboard.dismiss()}
      />
    </View>
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

function CustomCamera() {
  return (
    <View
      style={{
        paddingHorizontal: 5,
      }}
    >
      <Button
        icon={() => <Icon name='camera-alt' color='#666' />}
        buttonStyle={{
          backgroundColor: 'transparent',
        }}
      />
    </View>
  );
}

function customComposer(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
      }}
    >
      <Composer
        {...props}
        keyboardAppearance='dark'
        placeholderTextColor='#777'
        textInputStyle={{
          lineHeight: 19,
          fontSize: 16,
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
      primaryStyle={{}}
      containerStyle={{
        borderTopWidth: 1,
        borderTopColor: '#222',
        backgroundColor: '#111',
        paddingHorizontal: 5,
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
