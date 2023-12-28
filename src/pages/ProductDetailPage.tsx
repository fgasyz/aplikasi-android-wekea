import {useState} from 'react';
import {Dimensions, Animated, View, StyleSheet, Image, ScrollView, Text} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import detailProductList from '../models/detailProductList';
import GlobalStyles from '../public/GlobalStyles';
import { DataTable, Divider } from 'react-native-paper';
import Colors from '../constants/Colors';

function BulletIndicator({data, bulletInterpolate} : {data: any, bulletInterpolate: any}): React.JSX.Element {
  return (
    <View style={styles.bulletCardWrapper}>
      {data.map((_item: any, index: number) => {
        return (
          <Animated.View
            style={[
              styles.bulletCardItem,
              {opacity: bulletInterpolate[index].opacity},
            ]}
            key={index}
          />
        );
      })}
    </View>
  );
}

export default function ProductDetailPage({navigation} : {navigation: any}): React.JSX.Element {
  const {width} = Dimensions.get('window');
  const [scrollIndex, setScrollIndex] = useState(0);
  const bulletScrollView = new Animated.Value(0);

  const bulletInterpolate = detailProductList.images.map((_, index) => {
    const opacity: any = bulletScrollView.interpolate({
      inputRange: scrollIndex === index ? [0, 1, 2] : [0, 1, 2],
      outputRange: scrollIndex === index ? [1, 0, 1] : [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });
    return {opacity: opacity};
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={Colors.red}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Carousel
          width={width}
          height={400}
          loop={false}
          data={detailProductList.images}
          onSnapToItem={index => setScrollIndex(index)}
          renderItem={({item}) => {
            return <Image source={{uri: item}} style={styles.imageItem} />;
          }}
        />
        <BulletIndicator
          data={detailProductList.images}
          bulletInterpolate={bulletInterpolate}
        />
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.title}>Lorem ipsum dolor sit amet.</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.averageRatingText}>3</Text>
        <View style={styles.stars}>
          {Array.from({length: 5}).map((_, index) =>{
            const starColor = index < detailProductList.averageRating ? Colors.yellow : "#aaa"
            return <Ionicons key={index} name="star" size={20} color={starColor}/>
          })}
        </View>
        <Text style={styles.countReviewText}>({detailProductList.countReview} reviews)</Text>
      </View>
      <Divider style={{marginVertical: 10}}/>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View>
          <Text style={[styles.priceText, {textDecorationLine: 'line-through'}]}>Rp. {new Intl.NumberFormat("id-ID", {style: "decimal", currency: "IDR"}).format(detailProductList.price)}</Text>
          <Text style={[styles.discountPriceText]}>Rp. {new Intl.NumberFormat("id-ID", {style: "decimal", currency: "IDR"}).format(detailProductList.price - 1000)}</Text>
        </View>
        <View style={styles.avatarDiscount}>
          <Text style={styles.discountText}>-10%</Text>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.descriptionText}>Spesifikasi dan Deskripsi</Text>
        <Text style={styles.subDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.dataTableTitle}>Spesifikasi :</DataTable.Title>
          </DataTable.Header>
          {detailProductList.specifications.map((specification) =>{
            return <DataTable.Row>
              <DataTable.Cell textStyle={styles.dataTableCellText}>{specification.title}</DataTable.Cell>
              <DataTable.Cell textStyle={styles.dataTableCellText}>{specification.description}</DataTable.Cell>
            </DataTable.Row>
          })}
        </DataTable>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bulletCardWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    zIndex: 100,
    alignSelf: 'center',
  },
  bulletCardItem: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.red,
    marginHorizontal: 5,
  },
  imageItem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 2,
  },
  productContainer: {
    padding: 10
  },
  title: {
    ...GlobalStyles.largeFont,
    marginBottom: 5,
    color: Colors.red
  },
  averageRatingText: {
    ...GlobalStyles.smallFont,
    fontWeight: "700",
    color: 'black'
  },
  countReviewText: {
    ...GlobalStyles.smallFont,
    fontWeight: "700",
    color: 'black'
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  priceText: {
    ...GlobalStyles.mediumFont,
    fontWeight: "500",
    color: 'black'
  },
  discountPriceText: {
    ...GlobalStyles.largeFont,
    fontWeight: "bold",
    color: Colors.orange
  },
  discountText: {
    ...GlobalStyles.smallFont,
    color: "#fff",

  },
  avatarDiscount: {
    backgroundColor: Colors.orange,
    height: 50,
    width: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  descriptionText: {
    ...GlobalStyles.mediumFont,
    color: "black"
  },
  subDescriptionText: {
    ...GlobalStyles.smallFont,
    color: 'black'
  },
  dataTableTitle: {
    ...GlobalStyles.smallFont,
    color: "black"
  },
  dataTableCellText: {
    ...GlobalStyles.smallFont,
    color: 'black'
  }
});
