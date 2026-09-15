import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {cartStyle} from './styles';

// Mock data
const initialCartItems = [
  {
    id: '1',
    name: 'Haircut & Styling',
    salon: 'Glow Beauty Salon',
    price: 25,
    image: 'https://picsum.photos/200/200?random=1',
  },
  {
    id: '2',
    name: 'Manicure',
    salon: 'Nail Studio',
    price: 15,
    image: 'https://picsum.photos/200/200?random=2',
  },
  {
    id: '3',
    name: 'Facial Treatment',
    salon: 'Glow Beauty Salon',
    price: 40,
    image: 'https://picsum.photos/200/200?random=3',
  },
];

export default function Cart({navigation}) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={cartStyle.mainList}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Text style={cartStyle.header}>My Cart</Text>
        )}
        ListEmptyComponent={() => (
          <Text style={cartStyle.emptyText}>Your cart is empty</Text>
        )}
        renderItem={({item}) => (
          <View style={cartStyle.card}>
            <Image source={{uri: item.image}} style={cartStyle.image} />
            <View style={cartStyle.info}>
              <Text style={cartStyle.name}>{item.name}</Text>
              <Text style={cartStyle.salon}>{item.salon}</Text>
              <Text style={cartStyle.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <AntDesign name="close" size={20} color="#999" />
            </TouchableOpacity>
          </View>
        )}
      />

      {cartItems.length > 0 && (
        <View style={cartStyle.footer}>
          <View style={cartStyle.totalRow}>
            <Text style={cartStyle.totalLabel}>Total</Text>
            <Text style={cartStyle.totalValue}>${total}</Text>
          </View>
          <TouchableOpacity style={cartStyle.checkoutButton}>
            <Text style={cartStyle.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
