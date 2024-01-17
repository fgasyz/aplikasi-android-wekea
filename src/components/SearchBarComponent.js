import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {IconButton, Searchbar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors.js';

export default function SearchBarComponent() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchbar}
        iconColor={Colors.marronRed}
        placeholder="Mau cari apa?"
        placeholderTextColor={'grey'}
        cursorColor={Colors.marronRed}
      
        theme={{ roundness: 2 }} value={searchQuery} onChangeText={onChangeSearch}     />
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton icon="menu" iconColor={Colors.marronRed} onPress={() => navigation.navigate("Menu")}/>
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
