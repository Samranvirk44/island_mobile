

 import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 import { Router, Scene, Stack } from 'react-native-router-flux';


 ///////////////User/////////////////
import signup from '../Modules/Registration/signup'
import login from '../Modules/Registration/login'
import menu from '../Modules/Menu/menu'
import reciept from '../Modules/Menu/reciept'
import forgot from '../Modules/Registration/forgot'
import products from '../Modules/Menu/products'
import product from '../Modules/Menu/product'
import profile from '../Modules/profile/profile'
import resetpassword from '../Modules/Registration/reset_pass'



 console.disableYellowBox = true;   //it will ignore warnings
 class MyClass extends Component {
   render() {
     return (
       <Router>
         <Stack key="root" hideNavBar>
         <Scene key="signup" component={signup} title="signup" />
         <Scene key="login" component={login} title="login" initial/>
         <Scene key="menu" component={menu} title="menu"/>
         <Scene key="reciept" component={reciept} title="reciept"/>
         <Scene key="forgot" component={forgot} title="forgot"/>
         <Scene key="products" component={products} title="products"/>
         <Scene key="product" component={product} title="product"/>
         <Scene key="profile" component={profile} title="profile"/>
         <Scene key="profile" component={profile} title="profile"/>
         <Scene key="resetpassword" component={resetpassword} title="resetpassword"/>





         </Stack>
       </Router>
     );
   }
 }
 
 
 export default MyClass;
 



