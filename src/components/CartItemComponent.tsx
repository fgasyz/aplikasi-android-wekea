import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {IconButton, List} from 'react-native-paper';
import GlobalStyles from '../public/GlobalStyles';

import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import Animated, {SlideInLeft} from 'react-native-reanimated';

export default function CartItemComponent({
  datalist,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} : {
  datalist : any,
  deleteItem : any,
  increaseQuantity : any,
  decreaseQuantity : any,
}) : React.JSX.Element {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={datalist}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <GestureHandlerRootView style={{marginVertical: 5}}>
              <Animated.View exiting={SlideInLeft.duration(1000)}>
                <Swipeable
                  renderRightActions={() => (
                    <View style={styles.cartTrashButton}>
                      <IconButton
                        icon="delete"
                        size={24}
                        onPress={() => deleteItem(item.id)}
                      />
                    </View>
                  )}>
                  <List.Item title=""
                    style={styles.cartItem}
                    left={() => {
                      return (
                        <View style={styles.cartItemLeft}>
                          <Image
                            source={{uri: item.image}}
                            style={styles.cartItemImg}
                          />
                          <View>
                            <Text style={GlobalStyles.regularFont}>
                              {item.name}
                            </Text>
                            <Text style={GlobalStyles.smallFont}>Rp. 
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
                          <Text>{item.quantity}</Text>
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
    marginHorizontal: 20,
    backgroundColor: '#ECECED',
    padding: 10,
    borderRadius: 10,
  },
  cartItemLeft: {
    margin: 0,
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
    margin: 0,
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
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ECECED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
