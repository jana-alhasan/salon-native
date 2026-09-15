import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {profileStyle} from './styles';

// Mock user
const user = {
  name: 'Jana Alhasan',
  email: 'jannahasan@hotmail.com',
  avatar: 'https://i.pravatar.cc/150?img=47',
};

const menuItems = [
  {id: '1', label: 'My Bookings', icon: 'calendar-outline'},
  {id: '2', label: 'Favorite Salons', icon: 'heart-outline'},
  {id: '3', label: 'Payment Methods', icon: 'card-outline'},
  {id: '4', label: 'Settings', icon: 'settings-outline'},
  {id: '5', label: 'Help & Support', icon: 'help-circle-outline'},
];

export default function Profile({navigation}) {
  return (
    <View style={profileStyle.mainList}>
      <View style={profileStyle.header}>
        <Image source={{uri: user.avatar}} style={profileStyle.avatar} />
        <Text style={profileStyle.name}>{user.name}</Text>
        <Text style={profileStyle.email}>{user.email}</Text>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        contentContainerStyle={profileStyle.list}
        renderItem={({item}) => (
          <TouchableOpacity style={profileStyle.menuItem}>
            <Ionicons name={item.icon} size={20} color="#774a96" />
            <Text style={profileStyle.menuLabel}>{item.label}</Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color="#ccc"
              style={profileStyle.chevron}
            />
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={profileStyle.logoutButton}>
            <MaterialIcons name="logout" size={18} color="#e74c3c" />
            <Text style={profileStyle.logoutText}>Log Out</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
