
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker ,FooterTab,Footer,Button} from 'native-base';

import styles from '../../Styles/styles'
import img from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpeg'
import img3 from '../../Images/img3.jpeg'
import { Actions } from 'react-native-router-flux';


class Signup extends Component {


  state = {
   
    items:[1,2,3],
    image:[img,img2,img3],
    products:[]

  }
  
  
  



 
  componentDidMount = ()=> {
    console.log(this.props.product)
}
  render() {
    return (
      <Container>
        
        <Content padder>
      <View style={styles.sign_up_1_container}>
      <View style={{flexDirection:'row',width:'100%'}}>
          <TouchableWithoutFeedback onPress={()=>Actions.products({category:this.props.category})}>
      <Icon  name='arrowleft' type='AntDesign' style={{color:'green'}}/>
      </TouchableWithoutFeedback>

        <Text style={{fontSize:25,alignSelf:'center',marginLeft:30}}>Product Description </Text>
{/* 
<View style={{flexDirection:'row',justifyContent:'flex-end',width:'20%'}}> 
  <Icon  name='shoppingcart' type='AntDesign'  style={{marginTop:4,color:'green'}}/>
  <TouchableWithoutFeedback onPress={()=>this.fun()}>
  <View style={{borderWidth:1,marginRight:5,marginLeft:-4,borderRadius:50,height:20,width:20,alignItems:'center',backgroundColor:'yellow'}}>
  <Text >{this.state.counter}</Text>
  
  </View>
  </TouchableWithoutFeedback>
          </View> */}
        </View>
        
        <View style={{flexDirection:'row',marginTop:50}}>

        <View style={{ width: '30%', height:80,marginTop:10}}>
        <Image
        style={{ width: '100%', height: '100%',resizeMode: 'contain' }}
                      source={{
          uri: (this.props.product.image),
        }}
      />
                  </View>
                  <Text style={{fontSize:20}}>{this.props.product.price} $</Text>
                  </View>
    <Text style={styles.text_p}>{this.props.product.name}</Text>
    <Text>{this.props.product.description}</Text>


         <TouchableWithoutFeedback onPress={()=>Actions.reciept()} >
        <View style={[styles.menu_btn,{height:40}]}>
        <Text style={styles.s_text_button}>Go To Pay</Text>
        <Icon  name='arrowright' type='AntDesign' style={{marginLeft:20,color:'white'}}/>
        </View>
        </TouchableWithoutFeedback>

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
