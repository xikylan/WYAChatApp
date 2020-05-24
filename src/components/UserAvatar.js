import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { globalStyles } from '../GlobalStyles';

export function UserAvatarAndName(props) {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{ uri: props.avatarImg }}
        size={props.avatarSize}
      />
      <Text style={styles.nameText}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  nameText: {
    paddingLeft: 10,
    color: globalStyles.lightColor,
  },
});
