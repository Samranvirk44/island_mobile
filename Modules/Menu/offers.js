
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker } from 'native-base';

import styles from '../../Styles/styles'
import img from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpeg'
import img3 from '../../Images/img3.jpeg'
import url from '../URL'


class Signup extends Component {


  state = {
   
    items:[1,2,3],
    image:[img,img2,img3],
    offers:[]

  }
  
  

  get_offers=async()=>{
    let data={
    }
  
    await fetch(url+'offers/get_offers', {
      method: 'POST',           
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
  
    })
    .then(res => res.json())
    .then((resjson) => {
        if(resjson.data.length!=0){
  console.log(resjson.data)
  this.setState({
    offers:resjson.data
  })
        }
        else{
          console.log('there is no data')
          alert('in else')
        }
    })
    .catch(err => {
        console.log('failed',err)   
        alert('in catch')         
      })
  }


 
  componentDidMount = ()=> {
this.get_offers()
  }
  render() {
    return (
      <Container>
        
        <Content padder>
      <View style={styles.sign_up_1_container}>
          {
            this.state.offers.map((data, index) => (

              data.offer_items.map((d2,i)=>(
                

              <TouchableWithoutFeedback >
   <View style={{flexDirection:'column',width:'100%'}}>
                <View  style={{height:100,flexDirection:'row',alignItems:"center"}}>
                  
                  <View style={{ width: '30%', height: '70%'}}>
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      source={this.state.image[index]} />
                  </View>
                  <View style={{flexDirection:'column',width:'40%',justifyContent:'space-around',height:50}}>
                  <View style={{ width: '100%',marginLeft:10 }}>
                    <Text>Burger</Text>
                  </View>
                  <View style={{ width: '100%',marginLeft:10 }}>
                    <Text style={{color:'grey'}}>Beaf Burger with cheese</Text>
                  </View>
                  </View>
                    <View style={{ width: '15%',flexDirection:'column'}}>
                  <View style={{ width: '100%'}}>
                    <Text >100Rs</Text>
                  </View>

                  <View style={{ width: '100%'}}>
                    <Text >10%</Text>
                  </View>
                  </View>
                  {/* <View style={{ width: '15%',}}>
                    <Icon name='plussquare' type='AntDesign' style={{ marginRight: 15,color:'green', alignSelf: 'flex-end' }} />
                  </View> */}

                </View>
                </View>
              </TouchableWithoutFeedback>

              ))


            ))

          }

         <TouchableWithoutFeedback  >
        <View style={styles.menu_btn}>
        <Text style={styles.s_text_button}>Go To Pay</Text>
        <Icon  name='arrowright' type='AntDesign' style={{marginLeft:20,color:'white'}}/>
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
