import {ScrollView, StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {Card, Button, IconButton} from 'react-native-paper';
import productList from '../models/productList';
import {useNavigation} from '@react-navigation/native';
import GlobalStyles from '../public/GlobalStyles';
import Colors from '../constants/Colors.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dimension = Dimensions.get("screen");

export default function ProductComponent(){
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Text
          style={{
            ...GlobalStyles.regularFont,
            marginBottom: 10,
            color: "black"
          }}>
          Produk teratas
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllProduct")}>
          <Text
            style={{
              ...GlobalStyles.smallFont,
              color: "black",
              marginBottom: 8
            }}>
            lihat semua
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        {productList.map((item, index) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            key={index}
            onPress={() => {
              navigation.navigate('Detail', {
                id: item.id,
              });
            }}>
              <View style={{position: "relative"}}>
                <Image source={{uri: item.image}} style={styles.image} />
                <IconButton iconColor={Colors.red} size={20} icon={"heart-outline"} style={{position: "absolute", top: 0, right: 0, backgroundColor: "white"}}/>
              </View>
            <View style={{paddingTop: 5, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <View style={{marginVertical: 5}}>
                <Text style={{color: Colors.red, ...GlobalStyles.smallFont, fontWeight: "500"}}>
                  {item.name}
                </Text>
                  <Text style={{color: 'black', ...GlobalStyles.smallFont, fontWeight: "400"}}>Rp. 
                    {new Intl.NumberFormat('id-ID', {
                      currency: 'IDR',
                    }).format(item.price)}
                  </Text>
              </View>
              <View style={{backgroundColor: Colors.red, borderTopLeftRadius: 10, borderBottomRightRadius: 10}}>
                <IconButton size={18} icon={"cart-variant"} iconColor={"white"}/>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    rowGap: 10,
  },
  card: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 220,
  },
  image: {
    borderRadius: 5,
    height: 100,
  },
});
