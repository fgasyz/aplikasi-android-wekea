import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import productList from '../models/productList';

export default function CarouselItemComponent() : React.JSX.Element {
  const width = Dimensions.get('window').width;

  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <View
      style={{alignItems: 'center', borderRadius: 15, position: 'relative'}}>
      <Carousel
        loop
        width={width - 20}
        height={width / 2}
        autoPlay={true}
        data={productList}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setCurrentImage(index)}
        renderItem={({index}) => (
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15,
            }}
            source={{uri: productList[index].image}}></Image>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
