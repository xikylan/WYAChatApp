import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function DrawerHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Founder's 3rd</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.membersButton}>
          <Text style={styles.membersButtonText}>14 members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteButtonText}>Invite +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    justifyContent: 'center',
    height: '15%',
    backgroundColor: '#222',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  inviteButton: {
    backgroundColor: '#D54AFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  membersButton: {
    backgroundColor: '#D54AFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  membersButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    color: '#eee',
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
