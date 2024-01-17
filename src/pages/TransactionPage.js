import {StyleSheet, Text, View, FlatList, Image, Pressable, StatusBar} from 'react-native';
import React, {useState, useRef} from 'react';
import {Button, Divider, Searchbar} from 'react-native-paper';
import GlobalStyles from '../public/GlobalStyles';
import transactionList from '../models/transactionList.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/Colors.js';
import * as Animatable from 'react-native-animatable';


export default function TransactionPage() {
  const transactionStatus = [
    {
      value: 'semua',
      label: 'semua',
    },
    {
      value: 'dikemas',
      label: 'dikemas',
    },
    {
      value: 'dikirim',
      label: 'dikirim',
    },
    {
      value: 'selesai',
      label: 'selesai',
    },
  ];

  const [filterData, setFilterData] = useState(transactionList);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const activeButton = useRef('semua');

  const transactionAnimate = useRef();

  function filterTransactionByStatus(status) {
    let result = transactionList.filter(item => item.status == status);
    if (result.length == 0) {
      setFilterData(transactionList);
      activeButton.current = 'semua';
    } else {
      setFilterData(result);
    }
    activeButton.current = status;
  }

  return (
    <View style={styles.container}>
     <StatusBar backgroundColor={Colors.marronRed} />
      <Searchbar
        style={styles.searchbar}
        iconColor={Colors.marronRed}
        placeholder="Mau cari apa?"
        placeholderTextColor={'grey'}
        cursorColor={Colors.marronRed}
        theme={{roundness: 2}}
        value={searchQuery}
        onChangeText={onChangeSearch}
      />

      <View style={styles.buttonTabWrapper}>
        {transactionStatus.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => filterTransactionByStatus(item.value)}>
              <Text
                ref={activeButton}
                style={{
                  fontWeight:
                    item.value == activeButton.current ? 'bold' : 'normal',
                  color:
                    item.value == activeButton.current ? Colors.red : 'black',
                }}>
                {item.value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={filterData}
        style={{marginBottom: 50}}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Animatable.View
              key={item.id}
              ref={transactionAnimate.current}
              delay={(filterData[index].id - 1) * 1000}
              animation={'fadeInUp'}
              style={styles.transactionContainer}>
              <View style={styles.transactionHeader}>
                <Text style={styles.transactionDate}>{item.date}</Text>
                <View style={styles.transactionStatus}>
                  <Text style={styles.transactionStatusText}>
                    {item.status}
                  </Text>
                </View>
              </View>
              {item?.items?.map(i => {
                return (
                  <View style={styles.transactionBody} key={i.id}>
                    <View style={styles.transactionBodyLeft}>
                      <Image
                        source={{uri: i.image}}
                        style={styles.transactionBodyImage}
                      />
                      <View style={styles.transactionBodyText}>
                        <Text style={styles.transactionBodyTextTitle}>
                          {i.name}
                        </Text>
                        <Text style={styles.transactionBodyTextDesc}>
                          jumlah: {i.qty}
                        </Text>
                      </View>
                    </View>
                    <Text style={{color: 'black'}}>
                      Rp.
                      {new Intl.NumberFormat('id-ID', {
                        currency: 'IDR',
                      }).format(i.price)}
                    </Text>
                  </View>
                );
              })}
              <Divider />
              <View style={styles.transactionFooter}>
                <Pressable>
                  <View style={styles.transactionFooterButton}>
                    <Button icon={'truck'} textColor={Colors.orange}>
                      Lacak
                    </Button>
                  </View>
                </Pressable>
              </View>
            </Animatable.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  transactionContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    gap: 16,
  },

  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  transactionDate: {
    fontWeight: '400',
    fontSize: 12,
    marginRight: 10,
    color: 'black',
  },

  transactionStatus: {
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 5,

    backgroundColor: Colors.yellow,
  },

  transactionStatusText: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 5,
  },

  transactionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transactionBodyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  transactionBodyImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  transactionBodyText: {
    marginLeft: 10,
    gap: 5,
    color: 'black',
  },

  transactionBodyTextTitle: {
    ...GlobalStyles.smallFont,
    color: Colors.red,
  },

  transactionBodyTextDesc: {
    fontWeight: '400',
    color: 'black',
  },

  transactionFooter: {
    alignItems: 'flex-end',
    gap: 5,
  },

  transactionFooterButton: {
    paddingHorizontal: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.orange,
  },
  segmentedButtonsStyle: {
    marginVertical: 10,
    borderWidth: 0,
  },
  buttonTabWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
