import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {IconButton, Searchbar} from 'react-native-paper';

export default function SearchBarComponent() {
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchbar}
        placeholder="Mau cari apa?"
        placeholderTextColor={'grey'}
        theme={{roundness: 2}}
      />
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton icon="menu" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    columnGap: 5,
  },
  searchbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
