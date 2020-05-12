
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker ,FooterTab,Footer,Button} from 'native-base';

import styles from '../../Styles/styles'
import img from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpeg'
import img3 from '../../Images/img3.jpeg'
import { Actions } from 'react-native-router-flux';
import url from '../URL'


class Signup extends Component {


  state = {
   
    items:[1,2,3],
    image:[img,img2,img3],
    products:[]

  }
  
  get_products=async()=>{
    let data={
       cat_id:this.props.category.id
    }
  
    await fetch(url+'menu/products', {
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
    products:resjson.data
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
    console.log(this.props.category)
    this.get_products()
}
  render() {
    return (
      <Container>
        
        <Content padder>
      <View style={styles.sign_up_1_container}>
      <View style={{flexDirection:'row',width:'100%'}}>
          <TouchableWithoutFeedback onPress={()=>Actions.menu()}>
      <Icon  name='arrowleft' type='AntDesign' style={{color:'green'}}/>
      </TouchableWithoutFeedback>

        <Text style={{fontSize:25,alignSelf:'center',marginLeft:50}}>Select Products </Text>
{/* 
<View style={{flexDirection:'row',justifyContent:'flex-end',width:'27%'}}> 
  <Icon  name='shoppingcart' type='AntDesign'  style={{marginTop:4,color:'green'}}/>
  <TouchableWithoutFeedback onPress={()=>this.fun()}>
  <View style={{borderWidth:1,marginRight:5,marginLeft:-4,borderRadius:50,height:20,width:20,alignItems:'center',backgroundColor:'yellow'}}>
  <Text >{this.state.counter}</Text>
  
  </View>
  </TouchableWithoutFeedback>
          </View> */}
        </View>
        <View style={{ flexDirection: 'row', width: '80%',height:50,borderWidth:.5,borderRadius:50,borderColor:'grey',alignContent:'center',alignItems:'center' }}>
              <Icon name='search1' type='AntDesign' style={styles.PI_search_icons} />
              <Item style={[styles.PI_search_bar]}>
                <Input placeholder="Search here..." style={{ marginLeft: 2}} placeholderTextColor='#888' />
              </Item>

            </View>
          {
            this.state.products.map((data, index) => (
              <TouchableWithoutFeedback onPress={()=>Actions.product({product:data,category:this.props.category})}>
   <View style={{flexDirection:'column',width:'100%',marginTop:20}}>
                <View  style={{height:100,flexDirection:'row',alignItems:"center"}}>
                  
                    {/* <Image
                      style={{ width: '100%', height: '100%' }}
                      source={this.state.image[index]} /> */}

                  <View style={{ width: '30%', height: '70%'}}>
                    {/* <Image
                      style={{ width: '100%', height: '100%',resizeMode: 'contain' }}
                      source={require('../../Images/pizza.png')}
                      /> */}
        <Image
        style={{ width: '100%', height: '100%',resizeMode: 'contain' }}
                      source={{
          uri: (data.image),
        }}
      />
                  </View>
                  <View style={{flexDirection:'column',width:'40%',justifyContent:'space-around',height:50}}>
                  <View style={{ width: '100%',marginLeft:10 }}>
            <Text>{data.name}</Text>
                  </View>
                  <View style={{ width: '100%',marginLeft:10 }}>
            <Text style={{color:'grey'}}>{data.description}</Text>
                  </View>
                  </View>
                  <View style={{ width: '15%'}}>
            <Text >{data.price} $</Text>
                  </View>
{/* 
                  <View style={{ width: '15%',}}>
                    <Icon name='plussquare' type='AntDesign' style={{ marginRight: 15,color:'green', alignSelf: 'flex-end' }} />
                  </View> */}

                </View>

                <View style={{width:'100%',backgroundColor:'grey',height:1}}></View>
                </View>
              </TouchableWithoutFeedback>

            ))

          }

         {/* <TouchableWithoutFeedback onPress={()=>Actions.reciept()} >
        <View style={[styles.menu_btn,{height:40}]}>
        <Text style={styles.s_text_button}>Go To Pay</Text>
        <Icon  name='arrowright' type='AntDesign' style={{marginLeft:20,color:'white'}}/>
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback  >
        <View style={[styles.menu_btn,{height:40}]}>
        <Text style={styles.s_text_button}>Go To Delivery</Text>
        <Icon  name='arrowright' type='AntDesign' style={{marginLeft:20,color:'white'}}/>
        </View>
        </TouchableWithoutFeedback> */}

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
