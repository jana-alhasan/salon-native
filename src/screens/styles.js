import { StyleSheet } from "react-native";
export const Homestyle = StyleSheet.create({
mainList:{
    backgroundColor: '#eeeeee',
},
card:{
backgroundColor:'white',
margin:10,
borderRadius:4,
},
coverImage:{
    borderRadius:4,
    height: 200,
 
},
description:{
    margin:10,
},
address:{
    fontSize:16,
    maxWidth:200

},
rating:{
   alignItems:'flex-start',
   width:'100%'

},
salonName:{
    color:'#18c8bb',
    fontSize:18
},
detail:{
   
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
},
button:{
    backgroundColor:"#18c8bb", 
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:10,
    paddingTop:10,
    borderRadius:20,
},
visit:{
    color:'white',
},
header:{
  fontSize:22,
  marginTop:20,
  marginLeft:20,
},
headerContainer:{
    backgroundColor:'gray'
}

});