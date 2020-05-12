
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Image} from 'react-native';
import { Container, Header, Content, Icon,Item,Label,Input,DatePicker, } from 'native-base';
import { SearchBar } from 'react-native-elements';



import styles from '../../Styles/styles'
import img from '../../Images/pizza.png'
import img2 from '../../Images/soop1.jpeg'
import img3 from '../../Images/drink1.png'
import { Actions } from 'react-native-router-flux';

import url from '../URL'

class Signup extends Component {


  state = {
   
    items:[1,2,3],
    image:[img,img2,img3],
    categories:[],
    search: '',
     tt:'../../Images/pizza.png'

  }
  
  

get_categories=async()=>{
  let data={

  }

  await fetch(url+'menu/categories', {
    method: 'POST',           
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data}),

  })
  .then(res => res.json())
  .then((resjson) => {
    console.log('image.....',resjson.data[0].image)
      if(resjson.data.length!=0){
console.log(resjson.data)
console.log('description',resjson.data[0].description)

this.setState({
  categories:resjson.data
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

updateSearch = search => {
  this.setState({ search });
};

 
  componentDidMount = ()=> {
    this.get_categories()
}
  render() {
    return (
      <Container>
        
        <Content padder>
      <View style={styles.sign_up_1_container}>
      <View style={{ flexDirection: 'row', width: '80%',height:50,borderWidth:.5,borderRadius:50,borderColor:'grey',alignContent:'center',alignItems:'center' }}>
              <Icon name='search1' type='AntDesign' style={styles.PI_search_icons} />
              <Item style={[styles.PI_search_bar]}>
                <Input placeholder="Search here..." style={{ marginLeft: 2}} placeholderTextColor='#888' />
              </Item>

            </View>
      {
            this.state.categories.map((data, index) => (
              <TouchableWithoutFeedback  onPress={()=>Actions.products({category:data})}>
   <View style={{flexDirection:'column',width:'100%'}}>
                <View  style={{height:100,flexDirection:'row',alignItems:"center"}}>
                  
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
                    <Text style={{color:'grey',fontSize:11}}>{data.description}</Text>
                  </View>
                  
                  </View>
                  

                </View>
                <View style={{width:'100%',backgroundColor:'grey',height:1}}></View>
                </View>
              </TouchableWithoutFeedback>

            ))
          }

         </View>

      </Content>
      </Container>
    );
  }
}


//make this component available to the app
export default Signup;
