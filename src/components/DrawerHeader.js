import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function DrawerHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Founder's Third</Text>
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
    paddingBottom: 20,
  },
  header: {
    justifyContent: 'flex-end',
    height: '25%',
    backgroundColor: '#4B75FF',
  },
  inviteButton: {
    backgroundColor: '#6482FF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  membersButton: {
    backgroundColor: '#849CFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  membersButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
