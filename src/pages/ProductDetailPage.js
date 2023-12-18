import {Dimensions, Animated, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import detailProductList from '../models/detailProductList.js';

function BulletIndicator({data}) {
  return (
    <View style={styles.bulletCardWrapper}>
      {data.map((item, index) => (
        <View style={styles.bulletCardItem} key={index} />
      ))}
    </View>
  );
}

export default function ProductDetailPage({navigation}) {
  const {width} = Dimensions.get('window');
  return (
    <View>
      <View style={styles.backButton}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Carousel
        width={width}
        height={400}
        loop={false}
        data={detailProductList.images}
        renderItem={({item}) => {
          return <Image source={{uri: item}} style={styles.imageItem} />;
        }}
      />
      <BulletIndicator data={detailProductList.images} />
    </View>
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
    backgroundColor: '#eee',
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
});
