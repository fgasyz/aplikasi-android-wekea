import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import CustomStatusBarComponent from '../components/CustomStatusBarComponent.js';
import SearchBarComponent from '../components/SearchBarComponent.js';
import CarouselItemComponent from '../components/CarouselItemComponent.js';
import CategoryComponent from '../components/CategoryComponent.js';
import ProductComponent from '../components/ProductComponent.js';
import PromotionComponent from '../components/PromotionComponent.js';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <SearchBarComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselItemComponent />
        <CategoryComponent />
        <PromotionComponent />
        <ProductComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
