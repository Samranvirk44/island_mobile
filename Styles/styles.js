import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({


/////For Sign up
    sign_up_1_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  signup_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#22FF73',
    //backgroundColor: '#4AD745',
    marginTop:30,
    height: '10%',
    width: '90%',
    borderRadius: 100
  },
  
  headingText: { fontSize:20, fontWeight: 'bold' },//
  s_text_button: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  
  itemstyle: { width: '95%', borderBottomWidth: 1, borderBottomColor: 'black', marginTop: 2, alignSelf: 'center' },
  username: { color: 'black', fontSize: 15 },
  date_pecker_view:{ width: '100%',borderBottomColor:'grey',borderBottomWidth:1.5,marginTop:2 },
  camera_view:{width:'20%',height:70,backgroundColor:'white',borderWidth:.5,borderRadius:100,marginTop:31,justifyContent:'center',alignItems:"center",alignContent:'center'},
camera_name_view:{flexDirection:'row',width:'100%',justifyContent:'space-around'},
dob_text:{color:'grey',marginLeft:5},
or_text:{color:'black',marginTop:20},

//Menu Products
product_view_home:{flexDirection:'row'},
menu_btn: {
  flexDirection:'row',
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#22FF73',
    //backgroundColor: '#4AD745',
    marginTop:30,
    height: '10%',
    width: '90%',
    borderRadius: 100
},
PI_search_icons:{fontSize:18,marginLeft:20},
PI_search_bar:{width:'75%',borderBottomWidth:0},




//Product
text_p:{fontSize:20},

})




