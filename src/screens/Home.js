import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {AirbnbRating } from 'react-native-ratings';
import axios from 'axios';
import {Homestyle} from './styles'


const Home = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNum) => {
    try {
      const response = await axios.get(
        `http://salon-dev.us-east-1.elasticbeanstalk.com/api/v2/salons?page=${pageNum}&limit=10`
      );
      setData((prevData) => (pageNum === 1 ? response.data.content : [...prevData, ...response.data.content]));
      console.log(response.data.content);
  
    } catch (error) {
      console.error(error.response.data || error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleEndReached = () => {
    // Increase the page number and fetch more data
    setPage((prevPage) => prevPage + 1);
  };



  return (

    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={Homestyle.card}>
          <View>
            <Image
              source={{uri: item.coverImage}}
              style={Homestyle.coverImage}

            />
          </View>
          <View style={Homestyle.description} >
          <Text style={Homestyle.salonName} >{item.name}</Text>
          <View style={Homestyle.rating}>
          <AirbnbRating
           isDisabled
           showRating={false}
           size={12}
           selectedColor='#18c8bb'
      
      
      />
      </View>
            <View style={Homestyle.detail}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={Homestyle.address}
             >
              {item.address.city.name} - {item.address.fullAddress}
            </Text>     
       
<TouchableOpacity style={Homestyle.button} >
        <Text style={Homestyle.visit}>Visit</Text>
      </TouchableOpacity>
          </View>
          </View>
        </View>
      )}
   
      ListEmptyComponent={()=><Text>No data found</Text>}
   
      keyExtractor={(item, index) => item.id + index.toString()}
      ListHeaderComponent={() => <Text style={Homestyle.header}>Salons</Text>}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      style={Homestyle.mainList}
    
    />
  );
};

export default Home;

