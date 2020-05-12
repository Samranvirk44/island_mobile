
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Tabs,Tab,Header, Content,Footer,FooterTab,Button, Icon,Item,Label,Input,DatePicker } from 'native-base';

import styles from '../../Styles/styles'

import Tab1 from './category'
import Tab2 from './offers'
import { Actions } from 'react-native-router-flux';
import url from '../URL'



class Signup extends Component {


  state = {
   
 counter:1,
 shop:false
  }
  
  

fun=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}


 
  componentDidMount = ()=> {
    this.setState({
      shop:false
    })
}

  shop=(c)=>{
    if(c.i==0){
      this.setState({
        shop:false
      })
    }
  else{
    this.setState({
      shop:true
    })
  }
  }
  render() {
    return (
      <Container>
        
          <View style={{flexDirection:'row'}}>
          <TouchableWithoutFeedback onPress={()=>Actions.login()}>
        <Icon  name='arrowleft' type='AntDesign' style={{color:'green'}}/>
        </TouchableWithoutFeedback>
          <Text style={{fontSize:25,alignSelf:'center',marginLeft:130}}>Menu</Text>
  {/* {
    this.state.shop==true?
  <View style={{flexDirection:'row',justifyContent:'flex-end',width:'40%'}}> 
    <Icon  name='shoppingcart' type='AntDesign'  style={{marginTop:4,color:'green'}}/>
    <TouchableWithoutFeedback onPress={()=>this.fun()}>
    <View style={{borderWidth:1,marginRight:5,marginLeft:-4,borderRadius:50,height:20,width:20,alignItems:'center',backgroundColor:'yellow'}}>
    <Text >{this.state.counter}</Text>
    
    </View>
    </TouchableWithoutFeedback>
            </View>
    :
    <View>
  </View>
  
  } */}
          </View>
        
       

          <Tabs  onChangeTab={(c)=>this.shop(c)} tabBarUnderlineStyle={{backgroundColor:'green'}}>
          <Tab heading="Categories"  tabStyle={{backgroundColor:'white'}} textStyle={{color:'green'}} activeTabStyle={{backgroundColor:'#22FF73'}} activeTextStyle={{color:'white'}} >
            <Tab1 />
          </Tab>
          <Tab heading="Offers" tabStyle={{backgroundColor:'white'}} textStyle={{color:'green'}} activeTabStyle={{backgroundColor:'#22FF73'}} activeTextStyle={{color:'white'}}>
            <Tab2 />
          </Tab>
         
        </Tabs>
{/*       
        <TouchableWithoutFeedback onPress={()=>this.register()} >
        <View style={[styles.menu_btn]}>
        <Text style={styles.s_text_button}>Next</Text>
        </View>
        </TouchableWithoutFeedback> */}
        {/* <View style={{height:50}}>
        </View> */}
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
