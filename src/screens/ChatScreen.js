import React from 'react';
import { View, Keyboard, SafeAreaView } from 'react-native';
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
        listViewProps={{ keyboardDismissMode: 'on-drag', marginVertical: 10 }}
        keyboardShouldPersistTaps='handled'
        bottomOffset={16}
        renderActions={(props) => customActions(props)}
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

function customActions(props) {
  return (
    <View
      style={{
        height: 42,
        marginLeft: 5,
      }}
    >
      <Actions
        {...props}
        onPressActionButton={() => Keyboard.dismiss()}
        icon={() => <Icon name='camera-alt' color='#999' size={25} />}
      />
    </View>
  );
}

function customSend(props) {
  return (
    <Send
      {...props}
      alwaysShowSend
      containerStyle={{
        justifyContent: 'center',
        paddingBottom: 5,
        // marginRight: 10,
      }}
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
        backgroundColor: '#222',
        borderRadius: 20,
        marginVertical: 8,
        marginLeft: 15,
        marginRight: 5,
        paddingRight: 10,
      }}
    >
      <Composer
        {...props}
        keyboardAppearance='dark'
        placeholderTextColor='#888'
        textInputStyle={{
          lineHeight: 20,
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
        // justifyContent: 'center',
        // alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#222',
        backgroundColor: '#111',
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
