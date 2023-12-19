import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, List } from 'react-native-paper'
import GlobalStyles from '../public/GlobalStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const menuData = [
    {
      title: 'Aktivitas',
      menuItems: [
        {
          title: 'Alamat',
          icon: 'location-outline',
        },
        {
          title: 'Produk yang disukai',
          icon: 'heart-outline',
        },
  
        {
          title: 'Catatan transaksi',
          icon: 'receipt-outline',
        },
        {
          title: 'Metode pembayaran',
          icon: 'card-outline',
        },
        {
          title: 'Keranjang',
          icon: 'cart-outline',
        },
      ],
    },
    {
      title: 'Pengaturan',
      menuItems: [
        {
          title: 'Tema',
          icon: 'moon-outline',
        },
        {
          title: 'Bahasa',
          icon: 'flag-outline',
        },
        {
          title: 'Bantuan',
          icon: 'help-circle-outline',
        },
        {
          title: 'Ubah kata sandi',
          icon: 'lock-closed-outline',
        },
      ],
    },
    {
      title: 'Tentang',
      menuItems: [
        {
          title: 'Tentang Kami',
          icon: 'information-outline',
        },
        {
          title: 'Kebijakan privasi',
          icon: 'shield-outline',
        },
        {
          title: 'Syarat & Ketentuan',
          icon: 'document-text-outline',
        },
      ],
    },
    {
      title: 'Keluar',
      menuItems: [
        {
          title: 'Keluar',
          icon: 'log-out-outline',
        },
      ],
    },
  ];

export default function MenuPage() : React.JSX.Element {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardProfile}>
        <View style={styles.HStack}>
        <Avatar.Image size={60} source={{uri: 'http://picsum.photos/700'}}/>
        <View>
        <Text style={styles.textUsername}>Firga Ismayoza</Text>
        <Text style={styles.textAddress}>Bangka Belitung, Manggar</Text>
        </View>
        </View>
        <View>
            <Ionicons name='settings-outline' size={24}/>
        </View>
      </View>
      <View style={styles.cardActivity}>
        {menuData.map((menu, index) => {
           return (<View style={styles.VStack} key={index}>
                <Text style={styles.activityTitle}>{menu.title}</Text>
                {menu.menuItems.map((item, index) => {
                    return (<View style={styles.HStack} key={index}>
                        <Ionicons name={item.icon} size={23}/>
                        <Text style={styles.activitySubTitle}>{item.title}</Text>
                    </View>)
                })}
            </View>)
        })}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    cardProfile: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 2,
        padding: 10,
        borderRadius: 10
    },
    HStack: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 12,
        alignItems: 'center'
    },
    VStack: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20
    },
    cardActivity: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingLeft: 20
    },
    textUsername: {
        ...GlobalStyles.mediumFont,
        fontWeight: 'bold'
    },
    textAddress: {
        ...GlobalStyles.smallFont,
        fontWeight: '400'
    },
    activityTitle: {
        ...GlobalStyles.mediumFont,
        fontWeight: 'bold',
        marginTop: 25
    },
    activitySubTitle: {
        ...GlobalStyles.regularFont,
        fontWeight: '400'
    }
})