import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import React from 'react';
import CustomStatusBarComponent from '../components/CustomStatusBarComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import CarouselItemComponent from '../components/CarouselItemComponent';
import CategoryComponent from '../components/CategoryComponent';
import ProductComponent from '../components/ProductComponent';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <SearchBarComponent/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <CarouselItemComponent/>
        <CategoryComponent/>
        <ProductComponent/>
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 5,
    padding: 10
  }
})