
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker,Footer,FooterTab,Button } from 'native-base';

import styles from '../../Styles/styles'
import img from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpeg'
import img3 from '../../Images/img3.jpeg'
import { Actions } from 'react-native-router-flux';
import url from '../URL'


class Signup extends Component {


  state = {
   
    items:[1,2,3],
    image:[img,img2,img3]

  }
  
  




 
  componentDidMount = ()=> {
    
}
  render() {
    return (
      <Container>
        
        <Content padder>
      <View style={styles.sign_up_1_container}>
      <Icon name='person' type='Fontisto' style={{fontSize:100,color:'green'}}  />

          <Text style={{fontSize:25,marginTop:6,color:'green'}}>Profile</Text>
          
   <View style={{flexDirection:'column',width:'100%'}}>
                <View  style={{height:50,flexDirection:'row',alignItems:"center",width:'100%'}}>
                  
                  <View style={{ width: '20%',marginLeft:10 }}>
                    <Text style={{fontSize:20}}>Name:</Text>
                  
                  </View>
                  <View style={{ width: '55%'}}>
                    <Text style={{fontSize:20}}>Samran Elahi</Text>
                  </View>
                  <View style={{ width: '24%',backgroundColor:'red',height:25,borderRadius:70,alignItems:'center',alignContent:'center'}}>
                    <Text >Change</Text>
                  </View>
                  

                </View>
                </View>
                <View style={{flexDirection:'column',width:'100%'}}>
                <View  style={{height:50,flexDirection:'row',alignItems:"center",width:'100%'}}>
                  
                  <View style={{ width: '20%',marginLeft:10 }}>
                    <Text style={{fontSize:20}}>Email:</Text>
                  
                  </View>
                  <View style={{ width: '55%'}}>
                    <Text style={{fontSize:20}}>Samran@gamil.com</Text>
                  </View>
                  <View style={{ width: '24%',backgroundColor:'red',height:25,borderRadius:70,alignItems:'center',alignContent:'center'}}>
                    <Text >Change</Text>
                  </View>
                  

                </View>
                </View>
                <View style={{flexDirection:'column',width:'100%'}}>
                <View  style={{height:50,flexDirection:'row',alignItems:"center",width:'100%'}}>
                  
                  <View style={{ width: '20%',marginLeft:10 }}>
                    <Text style={{fontSize:20}}>Pass:</Text>
                  
                  </View>
                  <View style={{ width: '55%'}}>
                    <Text style={{fontSize:20}}>12345</Text>
                  </View>
                  <View style={{ width: '24%',backgroundColor:'red',height:25,borderRadius:70,alignItems:'center',alignContent:'center'}}>
                    <Text >Change</Text>
                  </View>
                  

                </View>
                </View>

          
         
        <View style={{height:50}}>
        </View>
         </View>
      </Content>

      <Footer>
           <FooterTab style={{backgroundColor:'green'}}>
            
            <Button vertical onPress={()=>Actions.menu()}>
              <Icon name='home' type='Entypo' style={styles.PI_search_icons} />
              <Text style={{color:'white'}}>Home</Text>
            </Button>
            <Button vertical >
            <Icon name='bell' type='FontAwesome' style={styles.PI_search_icons} />
              <Text style={{color:'white'}}>Notifications</Text>
            </Button>
            <Button vertical onPress={()=>Actions.profile()}>
              <Icon name="person" />
              <Text style={{color:'white'}}>Profile</Text>
            </Button>
          </FooterTab> 
        </Footer>
      </Container>
    );
  }
}


//make this component available to the app
export default Signup;
