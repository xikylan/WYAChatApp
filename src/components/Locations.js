import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../GlobalStyles';
import { UserAvatarAndName } from './UserAvatar.js';

export function Location(props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{props.name}</Text>
          <Icon name='triangle-down' type='octicon' size={15} color='#999' />
        </View>
      </View>
      <View style={styles.nameList}>
        <UserAvatarAndName
          name='John D.'
          avatarImg='https://placeimg.com/140/140/any'
          avatarSize={25}
        />
        <UserAvatarAndName
          name='Amanda S.'
          avatarImg='https://placeimg.com/140/140/any'
          avatarSize={25}
        />
        <UserAvatarAndName
          name='George W.'
          avatarImg='https://placeimg.com/140/140/any'
          avatarSize={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.accessoryColor,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  label: {
    color: globalStyles.lightColor,
    fontWeight: 'bold',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameList: {
    flexDirection: 'column',
    marginBottom: 20,
  },
});
