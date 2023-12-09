import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Card, Button} from 'react-native-paper';
import productList from '../models/productList.js';

export default function ProductComponent() {
  return (
    <View style={{flex: 1, marginBottom: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'black',
          }}>
          Popular
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'grey',
          }}>
          see all
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        {productList.map((item, index) => (
          <Card mode="contained" style={styles.card} key={index}>
            <Card.Cover source={{uri: item.image}} style={styles.image} />
            <Card.Content style={{paddingTop: 5}}>
              <Text style={{fontWeight: '500', color: 'black'}}>
                {item.name}
              </Text>
              <Text style={{color: 'grey'}}>${item.price}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    columnGap: 10,
  },
  card: {
    backgroundColor: 'white',
    width: 150,
  },
  image: {
    height: 150,
  },
});
