
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker } from 'native-base';

import styles from '../../Styles/styles'
import { Actions } from 'react-native-router-flux';

import url from '../URL'

class Signup extends Component {


  state = {
    password:'',
    confirmpass:''
    

  }
  Update = (v, key) => {
     //   console.log('calling..',v)
        const name = /^[0-9]+$/
        switch (key) {
            case 1:
                this.setState({password: v })
              console.log(this.state.password)
              break;
            case 2:
                this.setState({confirmpass: v })
              console.log(this.state.confirmpass)
            break;
            
           
        }
    }




    forgot= async () => {
      let data={
        email:this.props.user_data[0].email,
        password:this.state.password
      }

      console.log('register is calling')
      if(this.state.password==''||this.state.confirmpass==''){
        alert('fill the form carefully')
      }
      else{
          if(this.state.password.length<4){
                 alert('Password Strength is Week')   
          }
          else{

            if(this.state.password==this.state.confirmpass){

                await fetch(url+'registration/reset_password', {
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
                else{
                    alert('Password and Confirm Password Must Be Same')
                }
          }
          
      }
      
        }
 
  componentDidMount = ()=> {
    console.log('props user',this.props.user_data)
}

  render() {
    return (
      <Container>
        
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}> 
          <TouchableWithoutFeedback onPress={()=>Actions.login()}>
             <Icon  name='arrowleft' type='AntDesign' style={{marginBottom: 20}}/>
             </TouchableWithoutFeedback>
     <View></View>
             </View>
        
        
        <Content padder>
      <View style={styles.sign_up_1_container}>
       
        <Text>Reset Your Password</Text>
       
        <Item style={styles.itemstyle} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Password*</Label>
                <Input secureTextEntry={true} allowFontScaling={false} value={this.state.password} onChangeText={(t) => this.Update(t, 1)} />
              </Item>
              <Item style={styles.itemstyle} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Confirm Password*</Label>
                <Input secureTextEntry={true} allowFontScaling={false} value={this.state.confirmpass} onChangeText={(t) => this.Update(t, 2)} />
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
