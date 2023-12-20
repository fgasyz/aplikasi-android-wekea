import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useMemo, useState} from 'react';
import productList from '../models/productList';
import CartItemComponent from '../components/CartItemComponent';
import GlobalStyles from '../public/GlobalStyles';

export default function CartPage() {
  const [productListItem, setProductListItem] = useState(productList);

  const totalPrice = useMemo(
    () =>
      productListItem.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      ),
    [productListItem],
  );

  const handleDelete = (itemId: number) => {
    setProductListItem(() => productListItem.filter(item => item.id != itemId));
  };

  const handleIncreaseQuantity = (indexProduct: number) => {
    setProductListItem(
      productListItem.map((product, index) => {
        if (index == indexProduct) {
          return {
            ...product,
            quantity: (product.quantity += 1),
          };
        }
        return product;
      }),
    );
  };

  const handleDecreaseQuantity = (indexProduct: number) => {
    setProductListItem(
      productListItem.map((product, index) => {
        if (index == indexProduct) {
          return {
            ...product,
            quantity: (product.quantity -= 1),
          };
        }
        return product;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...GlobalStyles.largeFont,
          marginVertical: 10,
          marginHorizontal: 20,
        }}>
        Keranjang
      </Text>
      <CartItemComponent
        datalist={productListItem}
        deleteItem={handleDelete}
        increaseQuantity={handleIncreaseQuantity}
        decreaseQuantity={handleDecreaseQuantity}
      />
      <View
        style={{
          backgroundColor: 'orange',
          marginHorizontal: 20,
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontWeight: '500',
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}>
          Pesan sekarang:&nbsp;
        </Text>
        <Text
          style={{
            fontWeight: '500',
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
          }}>Rp. 
          {new Intl.NumberFormat('id-ID', {
            currency: 'IDR',
          }).format(totalPrice)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 5,
    padding: 10,
    flexDirection: 'column',
    marginBottom: 170,
  },
  contentContainer: {
    rowGap: 10,
  },
});
