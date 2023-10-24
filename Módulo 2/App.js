import React from 'react';
import { StyleSheet, View } from 'react-native';
import BookSearchApp from './BookSearchApp';

export default function App() {
  return (
    <View style={styles.container}>
      <BookSearchApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
    backgroundColor: '#fff',
  },
});
