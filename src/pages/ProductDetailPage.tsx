import {useState} from 'react';
import {Dimensions, Animated, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import detailProductList from '../models/detailProductList';
import {clamp} from 'react-native-reanimated';

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
    const opacity = bulletScrollView.interpolate({
      inputRange: scrollIndex === index ? [0, 1, 2] : [0, 1, 2],
      outputRange: scrollIndex === index ? [1, 0, 1] : [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });
    return {opacity: opacity};
  });

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
