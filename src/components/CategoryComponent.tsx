import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import categoryList from '../models/categoryList';
import Colors from '../constants/Colors';
import GlobalStyles from '../public/GlobalStyles';

const furnitures = ['ruang belajar', 'ruang tamu', 'dapur', 'kamar tidur'];

export default function CategoryComponent() : React.JSX.Element {
  return (
    <View style={{marginTop: 10, marginBottom: 10}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{columnGap: 10}}>
        {categoryList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              rowGap: 5,
              padding: 10,
              width: 110,
              borderRadius: 10,
            }}
            activeOpacity={0.7}>
            {/* <Image style={{height: 40, width: 40}} source={item.image}/> */}
            <Text style={{textAlign: 'center', color: "black", ...GlobalStyles.smallFont}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
