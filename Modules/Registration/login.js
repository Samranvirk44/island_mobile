
import React, { Component } from 'react';
import { ImageBackground,View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image,StatusBar} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker, } from 'native-base';

import styles from '../../Styles/styles'
import { Actions } from 'react-native-router-flux';

import logoimg from '../../Images/Logo_300px.png'
import hasnotch from '../Deviceinfo/hasnotch'

import ImagePicker from 'react-native-image-picker';
import url from '../URL'

const options = {
  title: 'Select Photo',
  //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const createFormData = (photo, body) => {
  const data = new FormData();

  data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
          Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
      data.append(key, body[key]);
  });

  return data;
};


class Signup extends Component {


  state = {
    email:'',
    password:'',
    logo:logoimg,
    photo:null,
    url_img:''


  }
  
  
  image_upload(){
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
          console.log('User cancelled image picker');
      } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
      } else {
          console.log('image picked')
          const sourcee = { uri: response.uri };
          let size = response.fileSize / 1048576;
          if (size <= 1) {
              this.setState({
                  photo: response
              })
             this.handleUploadPhoto();
          }
          else {
              alert("Filesize greater than 1mb")
          }

      }
  });
    
  }

  handleUploadPhoto = async () => {
    console.log("uplod is calling")
    await fetch(url+ 'images/UploadImages', {
        method: "POST",
        body: createFormData(this.state.photo, { userId: 123 })
    })
        .then(response => response.json())
        .then(response => {
            console.log("Upload succes", response);

            if (response.Successful) {
                this.setState({ url_img:response.uri});
                alert('uploaded')
            }
            else {
                alert("Upload Failed")
            }
            console.log(this.state.url_img)
        })
        .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
        });
};


      Update = (v, key) => {
     //   console.log('calling..',v)
        const name = /^[0-9]+$/
        switch (key) {
            
            case 1:
                this.setState({email: v })
              console.log(this.state.email)
            break;
            case 2:
                this.setState({password: v })
              console.log(this.state.password)
            break;
           
        }
    }




    login= async () => {

      let data={
        email:this.state.email,
        password:this.state.password,
      }

      if(this.state.email==''||this.state.password==''){
        alert('fill the form carefully')
      }
      else{

          await fetch(url+'registration/login', {
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
              console.log(resjson.data[0].reset)
              if(resjson.data[0].reset==false){
                alert('First You have to reset your password')
                Actions.resetpassword({user_data:resjson.data})
              }
              else{
                console.log(resjson.data)
                alert(resjson.Message)
                Actions.menu()
              }
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
    console.log(hasnotch)
}
signup=()=>{
Actions.signup()
}

  render() {
    
    return (
      <Container>
               <StatusBar backgroundColor="green" hidden = {false} barStyle="dark-content" />    

        {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
                alert('calling')

              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())

                  }
                )
                Actions.menu()
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
          
          {
            hasnotch?
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:40}}> 
     <TouchableWithoutFeedback onPress={()=>this.signup()}>
        <Icon  name='arrowleft' type='AntDesign' style={{marginBottom: 40,color:'green'}}/>
        </TouchableWithoutFeedback>
<View>
</View>
        </View>
            :
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}> 
     <TouchableWithoutFeedback onPress={()=>this.signup()}>
        <Icon  name='arrowleft' type='AntDesign' style={{marginBottom: 20,color:'green'}}/>
        </TouchableWithoutFeedback>
<View>
</View>
        </View>
          }
          
          
         
        <Content padder>
      <View style={styles.sign_up_1_container}>
      <Image
                      style={{ width: 350, height: 100 ,resizeMode: 'contain'}}
                      source={this.state.logo} />
        <Text>Sign in with</Text>
        <View style={{flexDirection:'row'}}> 
        <Icon  name='google-plus-square' type='FontAwesome' />
        <TouchableWithoutFeedback onPress={() =>this.image_upload()}>

                <Icon  name='facebook-square' type='AntDesign' />
                </TouchableWithoutFeedback>

</View>
<Text style={styles.or_text}>or</Text>

  <Item style={styles.itemstyle} floatingLabel>
      <Label allowFontScaling={false} style={styles.username}>Email*</Label>
        <Input  allowFontScaling={false} value={this.state.email} onChangeText={(t) => this.Update(t, 1)} />
        </Item>
              <Item style={styles.itemstyle} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Password*</Label>
                <Input secureTextEntry={true} allowFontScaling={false} value={this.state.password} onChangeText={(t) => this.Update(t, 2)} />
              </Item>
              <TouchableWithoutFeedback onPress={()=>Actions.forgot()} >
      <Text style={{marginTop:10,marginRight:-200,borderBottomWidth:1,borderBottomColor:'green',color:'green'}}>Forgot-Password</Text>
</TouchableWithoutFeedback>
    



         <TouchableWithoutFeedback onPress={()=>this.login()} >
        <View style={[styles.signup_btn,{height:50}]}>
        <Text style={styles.s_text_button}>Log in</Text>
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
