import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {Button, Divider, Searchbar} from 'react-native-paper';
import GlobalStyles from '../public/GlobalStyles';

const data = [
  {
    id: 1,
    date: '12/12/2021',
    status: 'Sedang dikirim',
    items: [
      {
        id: 1,
        name: 'Produk 1',
        qty: 1,
        price: 1000000,
        image:
          'https://plus.unsplash.com/premium_photo-1678402545077-7a9ec2b5e5b8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww',
      },
    ],
  },
  {
    id: 2,
    date: '12/12/2021',
    status: 'Sedang dikirim',
    items: [
      {
        id: 1,
        name: 'Produk 2',
        qty: 1,
        price: 2000000,
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww',
      },
    ],
  },
  {
    id: 3,
    date: '12/12/2021',
    status: 'Sedang dikirim',
    items: [
      {
        id: 1,
        name: 'Produk 3',
        qty: 1,
        price: 4000000,
        image:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww',
      },
      {
        id: 2,
        name: 'Produk 4',
        qty: 1,
        price: 5000000,
        image:
          'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      },
    ],
  },
];

export default function TransactionPage(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Text style={[GlobalStyles.largeFont, {fontWeight: 'bold'}]}>
          Status Pesanan
        </Text>
      </View>
      <Searchbar
        style={styles.searchbar}
        placeholder="Cari pesanan anda"
        placeholderTextColor={'grey'}
        theme={{ roundness: 2 }} value={''}      />

      <FlatList
        data={data}
        style={{marginBottom: 50, marginTop: 10}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.transactionContainer}>
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
                    <Text>Rp. 
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
                    <Button icon={'truck'} textColor={'green'}>
                      Lacak
                    </Button>
                  </View>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
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
    marginVertical: 10,
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
  },

  transactionStatus: {
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 5,

    backgroundColor: 'green',
  },

  transactionStatusText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 5
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
  },

  transactionBodyTextTitle: {
    fontWeight: 'bold',
  },

  transactionBodyTextDesc: {
    fontWeight: '400',
  },

  transactionFooter: {
    alignItems: 'flex-end',
    gap: 5,
  },

  transactionFooterButton: {
    paddingHorizontal: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
  },
});
