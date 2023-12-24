import React, { useState ,useEffect} from 'react';
import { View, Image,Text, TextInput, Button, FlatList, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { searchStyle } from './searchStyles'; 
import { useDebounce } from 'use-debounce';
import axios from 'axios';
import { SearchBar } from 'react-native-screens';

export default function Store() {
  
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [debouncedSearchText] = useDebounce(searchText, 500);
  
    useEffect(() => {
      const handleSearch = async () => {
        try {
          const apiUrl = `http://salon-dev.us-east-1.elasticbeanstalk.com/api/v2/salons/suggestions?page=1&limit=10&name=${debouncedSearchText}`;
          const response = await axios.get(apiUrl);
          const { data } = response;
          setSearchResults(data.content);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
  
      handleSearch();
    }, [debouncedSearchText]);
  

  return (
    <View>
      <View >
      <View style={searchStyle.searchBar}>
      <AntDesign  name="search1"
        size={20}
        color="#774a96"/>
      <TextInput
        placeholder="Enter search text"
        value={searchText}
  
        onChangeText={(text) => setSearchText(text)}
      />
     </View>
     <Pressable>
      <Text>Close</Text>
      </Pressable>
     </View>
      <FlatList
      data={searchResults}
      renderItem={({item}) => (
        <View style={searchStyle.card}>
          <View>
            <Image
              source={{uri: item.thumbnail}}
              style={searchStyle.coverImage}

            />
          </View>
   
        <Text style={searchStyle.salonName} >{item.name}</Text>
       
           
                
       

          </View>
 
      )}
   
      ListEmptyComponent={()=><Text>Enter your Favourit Salon name here</Text>}   
      keyExtractor={(item, index) => item.id + index.toString()}
      onEndReachedThreshold={0.1}
      style={searchStyle.mainList}
    
    />
    </View>
  )
}




