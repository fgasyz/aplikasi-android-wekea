import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import GlobalStyles from '../public/GlobalStyles';
import Colors from '../constants/Colors.js';

import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import Animated, {SlideInLeft} from 'react-native-reanimated';

export default function CartItemComponent({
  datalist,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={datalist}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <GestureHandlerRootView>
              <Animated.View exiting={SlideInLeft.duration(1000)}>
                <Swipeable
                  renderRightActions={() => (
                    <View style={styles.cartTrashButton}>
                      <IconButton
                        iconColor={'#fff'}
                        icon="delete"
                        size={24}
                        onPress={() => deleteItem(item.id)}
                      />
                    </View>
                  )}>
                  <List.Item
                    title=""
                    style={styles.cartItem}
                    left={() => {
                      return (
                        <View style={styles.cartItemLeft}>
                          <Image
                            source={{uri: item.image}}
                            style={styles.cartItemImg}
                          />
                          <View>
                            <Text
                              style={[
                                GlobalStyles.regularFont,
                                {color: Colors.red},
                              ]}>
                              {item.name}
                            </Text>
                            <Text
                              style={[
                                GlobalStyles.smallFont,
                                {color: 'black'},
                              ]}>
                              Rp.
                              {new Intl.NumberFormat('id-ID', {
                                currency: 'IDR',
                              }).format(item.price)}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                    right={() => {
                      return (
                        <View style={styles.cartItemRight}>
                          <IconButton
                            icon="plus"
                            size={14}
                            onPress={() => increaseQuantity(index)}
                          />
                          <Text style={{color: 'black'}}>{item.quantity}</Text>
                          <IconButton
                            disabled={datalist[index].quantity === 1}
                            icon="minus"
                            size={14}
                            onPress={() => decreaseQuantity(index)}
                          />
                        </View>
                      );
                    }}></List.Item>
                </Swipeable>
              </Animated.View>
            </GestureHandlerRootView>
          );
        }}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  cartItemLeft: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  cartItemRight: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  checkoutBtnContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },

  checkoutButton: {
    marginHorizontal: 20,
    borderRadius: 10,
  },

  cartTrashButton: {
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
