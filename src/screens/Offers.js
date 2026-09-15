import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {offersStyle} from './styles';

// Mock data
const offers = [
  {
    id: '1',
    title: '20% Off Haircuts',
    salon: 'Glow Beauty Salon',
    validUntil: 'Valid until Sep 30',
    image: 'https://picsum.photos/300/160?random=11',
    discount: '20%',
  },
  {
    id: '2',
    title: 'Manicure + Pedicure Combo',
    salon: 'Nail Studio',
    validUntil: 'Valid until Oct 05',
    image: 'https://picsum.photos/300/160?random=12',
    discount: '15%',
  },
  {
    id: '3',
    title: 'Facial Treatment Special',
    salon: 'Skin Care Center',
    validUntil: 'Valid until Oct 10',
    image: 'https://picsum.photos/300/160?random=13',
    discount: '30%',
  },
];

export default function Offers() {
  return (
    <View style={offersStyle.mainList}>
      <FlatList
        data={offers}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Text style={offersStyle.header}>Current Offers</Text>
        )}
        ListEmptyComponent={() => (
          <Text style={offersStyle.emptyText}>
            No offers available right now
          </Text>
        )}
        renderItem={({item}) => (
          <View style={offersStyle.card}>
            <Image source={{uri: item.image}} style={offersStyle.image} />
            <View style={offersStyle.badge}>
              <Text style={offersStyle.badgeText}>-{item.discount}</Text>
            </View>
            <View style={offersStyle.info}>
              <Text style={offersStyle.title}>{item.title}</Text>
              <Text style={offersStyle.salon}>{item.salon}</Text>
              <Text style={offersStyle.valid}>{item.validUntil}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
