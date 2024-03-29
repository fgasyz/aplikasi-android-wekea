import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Avatar, Divider, IconButton} from 'react-native-paper';
import GlobalStyles from '../public/GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../constants/Colors.js';

const dimension = Dimensions.get('screen');

export default function ProfilDetailPage() {
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          iconColor={Colors.red}
          icon="pencil"
          style={{position: 'absolute', right: 0}}
        />
        <Avatar.Image
          size={80}
          source={{uri: 'http://picsum.photos/700'}}
          style={{marginTop: 20, alignSelf: 'center'}}
        />
        <Divider style={{marginTop: 30}} />
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.titleText}>Informasi Pengguna</Text>
        <View style={styles.userDescriptionContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleText}>Nama</Text>
          </View>
          <Text style={styles.descriptionText}>Firga Ismayoza</Text>
        </View>
        <View style={styles.userDescriptionContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleText}>Nama Belakang</Text>
          </View>
          <Text style={styles.descriptionText}>Ismayoza</Text>
        </View>
        <View style={styles.userDescriptionContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleText}>Bio</Text>
          </View>
          <Text style={styles.descriptionText}>
            ut enim blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit scelerisque in dictum non
          </Text>
        </View>
              <View style={styles.userDescriptionContainer}>
                  <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>User ID</Text>
                  </View>
                  <Text style={styles.descriptionText}>FGRY532D21</Text>
                </View>
                <View style={styles.userDescriptionContainer}>
                  <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>Email</Text>
                  </View>
                  <Text style={styles.descriptionText}>firga@gmail.com</Text>
                </View>
                <View style={styles.userDescriptionContainer}>
                  <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>No Telepon</Text>
                  </View>
                  <Text style={styles.descriptionText}>+62 852 699 14795</Text>
                </View>
                <View style={styles.userDescriptionContainer}>
                  <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>Jenis Kelamin</Text>
                  </View>
                  <Text style={styles.descriptionText}>Laki - Laki</Text>
                </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    height: dimension.height,
  },
  userContainer: {
    display: 'flex',
    rowGap: 15,
    marginTop: 20
  },
  titleText: {
    ...GlobalStyles.mediumFont,
    color: 'black',
  },
  subTitleText: {
    ...GlobalStyles.regularFont,
    color: 'black',
  },
  descriptionText: {
    ...GlobalStyles.smallFont,
    fontWeight: '400',
    flexShrink: 1,
    color: 'black',
  },
  userDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 70,
  },
  subTitleContainer: {
    width: '30%',
  },
});
