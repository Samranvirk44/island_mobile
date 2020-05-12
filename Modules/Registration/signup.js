
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image,StatusBar} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker } from 'native-base';

import styles from '../../Styles/styles'

import { Actions } from 'react-native-router-flux';

import ImagePicker from 'react-native-image-picker';

import PhoneInput from 'react-native-phone-input'
import logoimg from '../../Images/Logo_300px.png'

import url from '../URL'


// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Photo',
  //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
    countryFlag: 'pk',
      code: 92,
      number: '',
      countryFlagg: 'pk',
      codee: 92,
      numberr: '',

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
}

class Signup extends Component {


  state = {
    firsrname:'',
    lastname:'',
    email:'',
    mobilenumber:'',
    datebirth:'',
    password:'',
    confirmpass:'',
    zip:'',
    dob:'',
    avatarSource:'',
    photo:'',
    logo:logoimg


  }
  
  
  onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
  };

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
        const name = /^[a-zA-Z]+$/
        switch (key) {
            case 1:
              if (name.test(v)) {

                    this.setState({firsrname: v })
                    console.log(this.state.firsrname)  
                  }
                  else if (v.length == 0) {
                    this.setState({firstname:'' })
                    alert('Pleaase Enter only Valid Character')
                  }  
                break;
            case 2:
              if(name.test(v)){
                this.setState({lastname: v })
              console.log(this.state.lastname)
              }
              else if (v.length == 0) {
                this.setState({lastname:'' })
                alert('Pleaase Enter only Valid Character')
              }
            break;
            case 3:
                this.setState({email: v })
              console.log(this.state.email)
            break;
            case 4:
              console.log('its code',this.state.codee)
              console.log('country flag',this.state.countryFlagg)
              console.log('number',this.state.number)

                this.setState({mobilenumber: v })
              console.log(this.state.mobilenumber)
            break;
            case 5:
                this.setState({password: v })
              console.log(this.state.password)
            break;
            case 6:
                this.setState({confirmpass: v })
              console.log(this.state.confirmpass)
            break;
            case 7:
                this.setState({zip: v })
              console.log(this.state.zip)
            break;
            case 8:
                this.setState({dob: v })
              console.log(this.state.dob)
            break;
        }
    }




    register = async () => {
      //alert('signup')
      //Actions.log()
      console.log('register is calling')
      let data={
        email:this.state.email,
        password:this.state.password,
        firstname:this.state.firsrname,
        lastname:this.state.lastname,
        mobilenumber:this.state.number,
        zip:this.state.zip,
        dob:this.state.dob
      }
      console.log('data..............',data)


      if(this.state.email==''||this.state.firsrname==''||this.state.lastname==''||this.state.mobilenumber==''||this.state.dob=='',this.state.zip==''){
        alert('fill the form carefully')
      }else{
        if(this.state.password==this.state.confirmpass){
     
       await fetch(url+'registration/register', {
        method: 'post',           
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({data}),
  
      })
      .then(res => res.json())
      .then((resjson) => {
        if(resjson.Successful==false){
          alert(resjson.Message)
        }
        else{
         alert(resjson.Message)
          Actions.login()
        }
     })
      .catch(err => {
          console.log('failed',err)  
          alert('there is an error')          
        })

        }
        else{
          alert('password and confirm password must be same')
        }
      }
      
        }
 
  componentDidMount = ()=> {
}
phone=(code,flag)=>{
console.log('code',code)
console.log('flag',code)

}
  render() {
    return (
      <Container>
               <StatusBar backgroundColor="green" hidden = {false} barStyle="dark-content" />    

       
<View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}> 
         <TouchableWithoutFeedback onPress={()=>Actions.login()}>
        <Icon  name='arrowleft' type='AntDesign' style={{marginBottom: 20,color:'green'}}/>
        </TouchableWithoutFeedback>
        <Text style={styles.headingText}>Create Account</Text>
<View></View>
        </View>
       
         
        <Content padder>
      <View style={styles.sign_up_1_container}>
       
        {/* <Text>Sign in with</Text>
        <View style={{flexDirection:'row'}}> 
        <Icon  name='google-plus-square' type='FontAwesome' />
                <Icon  name='facebook-square' type='AntDesign' />
</View> */}
 <Image
      style={{ width: 350, height: 100,resizeMode: 'contain'}}
      source={this.state.logo} />

<View style={styles.camera_name_view}>

<View style={{flexDirection:'column',width:'70%'}}>
  
  <Item style={styles.itemstyle} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>First Name*</Label>
                <Input  allowFontScaling={false}  value={this.state.firsrname} onChangeText={(t) => this.Update(t, 1)}/>
              </Item>
              <Item style={styles.itemstyle} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Last Name*</Label>
                <Input  allowFontScaling={false} value={this.state.lastname} onChangeText={(t) => this.Update(t, 2)} />
              </Item>
  </View>
  <TouchableWithoutFeedback onPress={()=>this.image_upload()}>  

<View style={styles.camera_view}>
{
  this.state.photo==''?
  <Icon  name='camerao' type='AntDesign'/>

  :
  <Image source={this.state.photo} style={{height:'100%',width:'100%',borderRadius:50}} />

}

</View>
</TouchableWithoutFeedback>
  </View>
  <Item style={styles.itemstyle} floatingLabel>
      <Label allowFontScaling={false} style={styles.username}>Email*</Label>
        <Input  allowFontScaling={false} onEndEditing={() => {
                                if (/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(this.state.email.toLowerCase())) {

                                } else {
                                    alert('Invalid Email Address')
                                    this.setState({ email: '' })
                                }
                            }} value={this.state.email} onChangeText={(t) => this.Update(t, 3)} />
        </Item>
    
              
                <View style={styles.date_pecker_view}>
                  <DatePicker
                    placeHolderTextStyle={{ color: 'black',fontSize:15 }}
                    //  formatChosenDate={"MMM Do, YYYY"}
                    maximumDate={new Date()}
                    locale={"en"}
                    hideText={true}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={true}
                    animationType={"slide"}
                    androidMode={"spinner"}
                    placeHolderText={'Date Of Birth*'}
                    onDateChange={(val) => this.Update(val,8)}
                    textStyle={{ color: "#a9a9a9" }}
                    disabled={false}
                  />
                </View>
                

              <Text style={styles.dob_text}>Share your birth date to recieve a surprise on your special day</Text>
             
              <Item style={styles.itemstyle} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Zip/Postal</Label>
                <Input  allowFontScaling={false}  value={this.state.zip} onChangeText={(t) => this.Update(t, 7)}/>
              </Item>
              <View style={{width:'100%',flexDirection:'row'}}>
              {/* <PhoneInput
                style={{ width: '50%', height: 40,marginTop:16 }}
                ref={(ref) => { this.phone = ref; }}
                initialCountry={this.state.countryFlagg}
                textStyle={{ color: '#555555', fontSize: 14 }}
                flagStyle={{ width: 20, height: 15 }}
                value={this.state.codee }
                onSelectCountry={(v) => {
                  this.setState({ codee: this.phone.getCountryCode(), countryFlagg: this.phone.getISOCode() })
                }}
              /> */}

             <PhoneInput
             style={{ width: '98%', height: 40,marginTop:14,borderBottomWidth:1}}
              value={this.state.number}
              textStyle={{ color: 'black', fontSize: 17 }}
              ref={(ref) => { this.phone = ref; }}
              onPressConfirm={(v) => console.log(this.phone.getValue())}
              onSelectCountry={() => { this.setState({ number: this.phone.getValue() }) }}
              onChangePhoneNumber={(v) => this.setState({ number: v })}
            />
                
              </View>

              



              <TouchableWithoutFeedback onPress={()=>Actions.login()} >
      <Text style={{marginTop:10,marginRight:-280,borderBottomWidth:1,borderBottomColor:'green',color:'green'}}>Login</Text>
</TouchableWithoutFeedback>

              



         <TouchableWithoutFeedback onPress={()=>this.register()} >
        <View style={styles.signup_btn}>
        <Text style={styles.s_text_button}>Sign Up</Text>
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
