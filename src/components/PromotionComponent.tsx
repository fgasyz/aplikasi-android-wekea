import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import banner from '../models/banner';
import {Card} from 'react-native-paper';

export default function PromotionComponent() {
  return (
    <View style={{flex: 1, marginBottom: 80}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'black',
          }}>
          Penawaran minggu ini
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'grey',
            marginBottom: 8
          }}>
          lihat semua
        </Text>
      </View>
      <View style={styles.container}>
        {banner.map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Cover source={item.image} style={{height: 170}} />
          </Card>
        ))}
      </View>
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
    width: '48%',
  },
});
