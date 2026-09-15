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


export const cartStyle = StyleSheet.create({
  mainList: {
    backgroundColor: '#eeeeee',
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  salon: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  price: {
    fontSize: 15,
    color: '#18c8bb',
    marginTop: 4,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#774a96',
  },
  checkoutButton: {
    backgroundColor: '#774a96',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});


export const notificationsStyle = StyleSheet.create({
  mainList: {
    backgroundColor: '#eeeeee',
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2e9f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  message: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  time: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 6,
  },
});


export const offersStyle = StyleSheet.create({
  mainList: {
    backgroundColor: '#eeeeee',
  },
  header: {
    fontSize: 22,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontSize: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#18c8bb',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  salon: {
    fontSize: 13,
    color: '#774a96',
    marginTop: 2,
  },
  valid: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
});


export const profileStyle = StyleSheet.create({
  mainList: {
    backgroundColor: '#eeeeee',
  },
  header: {
    backgroundColor: '#774a96',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    color: '#e5d7ee',
    fontSize: 13,
    marginTop: 2,
  },
  list: {
    padding: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuLabel: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: '#333',
  },
  chevron: {
    marginLeft: 'auto',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 14,
  },
  logoutText: {
    color: '#e74c3c',
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '600',
  },
});
