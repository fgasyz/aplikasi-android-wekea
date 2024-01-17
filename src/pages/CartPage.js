import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import productList from '../models/productList';
import CartItemComponent from '../components/CartItemComponent';
import GlobalStyles from '../public/GlobalStyles';
import Colors from '../constants/Colors.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const dimension = Dimensions.get("screen")

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
      <CartItemComponent
        datalist={productListItem}
        deleteItem={handleDelete}
        increaseQuantity={handleIncreaseQuantity}
        decreaseQuantity={handleDecreaseQuantity}
      />
      <View style={styles.checkOutWrapper}>
        <View style={styles.itemInfoWrapper}>
        <Text style={{...GlobalStyles.smallFont, color: "black"}}>Total harga : Rp. 
          {new Intl.NumberFormat('id-ID', {
            currency: 'IDR',
          }).format(totalPrice)}</Text>
        <Text style={{...GlobalStyles.smallFont, color: "black"}}>{productListItem.length} item</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.checkOutButton}>
          <Text style={styles.checkOutButtonText}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    rowGap: 10,
  },
  checkOutWrapper: {
    width: dimension.width,
    padding: 20,
    position: "absolute",
    bottom: 60,
    flex: 1,
    flexDirection: "column",
    rowGap: 10,
    backgroundColor: "#fff"
  },
  itemInfoWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkOutButton: {
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 10
  },
  checkOutButtonText: {
    color: "#fff",
    textAlign: "center",
    ...GlobalStyles.regularFont
  }

});
