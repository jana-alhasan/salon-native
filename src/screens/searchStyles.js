import { StyleSheet } from "react-native";
export const searchStyle = StyleSheet.create({
    mainList:{
        backgroundColor: '#eeeeee',
    },
    card:{
    backgroundColor:'#eeeeee',
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:4,
    borderBottomColor:'light-gray',
    borderBottomWidth:0.2,
    gap:20,
    },
    coverImage:{
   
        borderRadius:50,
        height: 50,
        width:50,
     
    },
 
    salonName:{
        color:'black',
        fontSize:18
    },
    searchBar:{ 
        paddingLeft:10,
   
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        backgroundColor:'#fff',
        borderRadius:20,   
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
        width:'100%',
        gap:5,
    },
    searchInput:{
        width:'75%'
    },
close:{
    color:'white',
    fontSize:18,
}
  

 
    
});