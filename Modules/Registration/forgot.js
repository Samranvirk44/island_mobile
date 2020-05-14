
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker } from 'native-base';

import styles from '../../Styles/styles'
import { Actions } from 'react-native-router-flux';

import url from '../URL'
import hasnotch from '../Deviceinfo/hasnotch'
class Signup extends Component {


  state = {
    email:'',
    password:'',
    

  }
  Update = (v, key) => {
     //   console.log('calling..',v)
        const name = /^[0-9]+$/
        switch (key) {
            case 1:
                this.setState({email: v })
              console.log(this.state.email)
            break;
            
           
        }
    }




    forgot= async () => {

      let data={
        email:this.state.email,
      }

      console.log('register is calling')
      if(this.state.email==''){
        alert('fill the form carefully')
      }
      else{

          await fetch(url+'registration/forgot_password', {
            method: 'POST',           
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({data}),
      
          })
          .then(res => res.json())
          .then((resjson) => {
              if(resjson.Successful==true){
                 console.log(resjson)
                alert(resjson.Message)
                Actions.login()
              }
              else{
                  alert(resjson.Message)
              }
          })
          .catch(err => {
              console.log('failed',err)            
            })


      }
      
        }
 
  componentDidMount = ()=> {
    
}

  render() {
    return (
      <Container>
        
        {
          hasnotch?
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:40}}> 
          <TouchableWithoutFeedback onPress={()=>Actions.login()}>
             <Icon  name='arrowleft' type='AntDesign' style={{marginBottom: 20,color:'green'}}/>
             </TouchableWithoutFeedback>
     <View></View>
             </View>
          :
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}> 
          <TouchableWithoutFeedback onPress={()=>Actions.login()}>
             <Icon  name='arrowleft' type='AntDesign' style={{marginBottom: 20,color:'green'}}/>
             </TouchableWithoutFeedback>
     <View></View>
             </View>
        }
          
        
       
        <Content padder>
      <View style={styles.sign_up_1_container}>
       
        <Text>Reset Your Password</Text>
       

  <Item style={styles.itemstyle} floatingLabel>
      <Label allowFontScaling={false} style={styles.username}>Email*</Label>
        <Input  allowFontScaling={false} value={this.state.email} onChangeText={(t) => this.Update(t, 1)} />
        </Item>
             
    



         <TouchableWithoutFeedback onPress={()=>this.forgot()} >
        <View style={[styles.signup_btn,{height:50}]}>
        <Text style={styles.s_text_button}>Next</Text>
        </View>
        </TouchableWithoutFeedback>
         </View>
      </Content>
      </Container>
    );
  }
}


//make this component available to the app
export default Signup;
