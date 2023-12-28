import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import advertisementList from '../models/advertisementList';
import GlobalStyles from '../public/GlobalStyles';
import {Card} from 'react-native-paper';
import Colors from '../constants/Colors';

export default function PromotionComponent() {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
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
          Penawaran minggu ini
        </Text>
        <Text
          style={{
            ...GlobalStyles.smallFont,
            marginBottom: 8,
            color: "black"
          }}>
          lihat semua
        </Text>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={{columnGap: 10}} showsHorizontalScrollIndicator={false}>
        {advertisementList.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={{height: 130, width: 200, borderRadius: 10}} resizeMode="cover"/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    columnGap: 10,
    rowGap: 10,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 10
  },
});
