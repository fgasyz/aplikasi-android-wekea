import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import productList from '../models/productList';
import GlobalStyles from '../public/GlobalStyles';
import {IconButton, Searchbar} from 'react-native-paper';
import Colors from '../constants/Colors.js';
import * as Animatable from 'react-native-animatable';

export default function AllProductPage({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const cardRef = useRef();
  return (
    <View>
      <View style={styles.searchBarWrapper}>
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
          <IconButton size={22} icon="filter" iconColor={Colors.marronRed}/>
        </View>
      </View>
    <View style={styles.cardWrapper}>
      {productList.map((item, index) => {
        return (
          <Animatable.View style={styles.card} key={item.id} ref={cardRef.current} animation={"fadeInUp"} delay={productList[index].id * 500}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', {
                id: item.id,
              });
            }}>
              <View style={{position: 'relative'}}>
                <Image source={{uri: item.image}} style={styles.image} />
                <IconButton
                size={20}
                  iconColor={Colors.red}
                  icon={'heart-outline'}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'white',
                  }}
                />
              </View>
              <View
                style={{
                  paddingTop: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginVertical: 5}}>
                  <Text
                    style={{
                      color: Colors.red,
                      ...GlobalStyles.smallFont,
                      fontWeight: '500',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      ...GlobalStyles.smallFont,
                      fontWeight: '400',
                    }}>
                    Rp.
                    {new Intl.NumberFormat('id-ID', {
                      currency: 'IDR',
                    }).format(item.price)}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: Colors.red,
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}>
                  <IconButton
                    size={18}
                    icon={'cart-variant'}
                    iconColor={'white'}
                  />
                </View>
              </View>
          </TouchableOpacity>
            </Animatable.View>
        );
      })}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 5,
    rowGap: 5,
  },
  card: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '49%',
  },
  image: {
    borderRadius: 5,
    height: 100,
  },
  searchBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    columnGap: 5
  },
  searchbar: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
