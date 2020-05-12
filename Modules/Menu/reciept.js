
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker,FooterTab,Footer,Button } from 'native-base';

import styles from '../../Styles/styles'
import img from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpeg'
import img3 from '../../Images/img3.jpeg'
import { Actions } from 'react-native-router-flux';


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
          <Text style={{fontSize:25,marginTop:6,color:'green'}}>Reciept</Text>
          {
            this.state.items.map((data, index) => (
              <TouchableWithoutFeedback >
   <View style={{flexDirection:'column',width:'90%'}}>
                <View  style={{height:50,flexDirection:'row',alignItems:"center"}}>
                  
                  <View style={{flexDirection:'column',width:'60%',justifyContent:'space-around',height:50}}>
                  <View style={{ width: '100%',marginLeft:10 }}>
                    <Text>Burger</Text>
                  </View>
                  
                  </View>
                  <View style={{ width: '15%'}}>
                    <Text >100Rs</Text>
                  </View>
                  

                </View>
                <View style={{width:'50%',backgroundColor:'grey',height:1}}></View>
                </View>
              </TouchableWithoutFeedback>

            ))
          }
<View style={{flexDirection:'row',width:'100%',alignContent:'space-between',alignItems:'space-between'}}>
       <View style={{width:'50%',alignItems:'flex-end'}}>
        <Text style={{fontSize:25,marginTop:6,color:'green',marginLeft:'1%'}}>Total:</Text>
        </View>
        <View style={{width:'50%'}}>
        <Text style={{fontSize:25,marginTop:6,color:'green',marginLeft:'20%'}}>150$</Text>
        </View>
        </View>
         
        <TouchableWithoutFeedback onPress={()=>Actions.reciept()} >
        <View style={styles.menu_btn}>
        <Text style={styles.s_text_button}>Go To Pay</Text>
        <Icon  name='arrowright' type='AntDesign' style={{marginLeft:20,color:'white'}}/>
        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  >
        <View style={[styles.menu_btn,{height:40}]}>
        <Text style={styles.s_text_button}>Go To Delivery</Text>
        <Icon  name='arrowright' type='AntDesign' style={{marginLeft:20,color:'white'}}/>
        </View>
        </TouchableWithoutFeedback>
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
