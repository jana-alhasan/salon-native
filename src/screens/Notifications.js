import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {notificationsStyle} from './styles';

// Mock data
const notifications = [
  {
    id: '1',
    icon: 'calendar-outline',
    title: 'Booking Confirmed',
    message: 'Your appointment at Glow Beauty Salon is confirmed for 5 PM.',
    time: '2h ago',
  },
  {
    id: '2',
    icon: 'pricetag-outline',
    title: 'New Offer',
    message: '20% off on all haircut services this week.',
    time: '1d ago',
  },
  {
    id: '3',
    icon: 'star-outline',
    title: 'Rate Your Visit',
    message: 'How was your experience at Nail Studio?',
    time: '3d ago',
  },
];

export default function Notifications({navigation}) {
  return (
    <View style={notificationsStyle.mainList}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Text style={notificationsStyle.header}>Notifications</Text>
        )}
        ListEmptyComponent={() => (
          <Text style={notificationsStyle.emptyText}>
            No notifications yet
          </Text>
        )}
        renderItem={({item}) => (
          <View style={notificationsStyle.card}>
            <View style={notificationsStyle.iconWrapper}>
              <Ionicons name={item.icon} size={22} color="#774a96" />
            </View>
            <View style={notificationsStyle.textWrapper}>
              <Text style={notificationsStyle.title}>{item.title}</Text>
              <Text style={notificationsStyle.message}>{item.message}</Text>
              <Text style={notificationsStyle.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
