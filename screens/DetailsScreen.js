import React,{useState} from 'react';

import {
  Button,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Alert,
  Dimensions
} from 'react-native';

import {Avatar} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailsScreen({route}) {
  const paramKey1 = route.params && route.params.paramKey1;
  const paramKey2 = route.params && route.params.paramKey2;
  const paramKey3 = route.params && route.params.paramKey3;
  const paramKey4 = route.params && route.params.paramKey4;
  


  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assests/backcover.jpg')}
        style={{width: width/252, height: height/16}}>
            <View style={{flexDirection:'row',}}>
              <Ionicons
              name="notifications-outline"
              size={27}
              color="green"
              backgroundColor="green"
              style={{marginTop:15, marginLeft:300
              }}
            
            />
            
          <FontAwesome
              name="edit"
              size={22}
              color="green"
              backgroundColor="green"
              style={{marginTop:100
                
              }}
              
            />


            <FontAwesome
              name="dedent"
              size={27}
              color="green"
              backgroundColor="green"
              style={{marginTop:15, marginLeft: 20
              }}
            
            />
          
            
      
          </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>
        <Avatar.Image
            source={{uri:'https://www.thecharlestonphotographer.com/wp-content/uploads/2015/02/professional-business-portrait-photography-by-charleston-headshot-photographers-king-street-studios-21.jpg'}}
            size={120}
            style={{
              width:width/252,
              height:height/16,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          />
         
        </View>
      </ImageBackground>
      <View style={{marginTop: 120, marginLeft: 50,}}>
      
       <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
        First name  
       </Text>
       <Text> {paramKey1}</Text>
      
      
      <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
        Last name    
      </Text>
      <Text> {paramKey2}</Text>
      
      

      <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
        Contact number 
      </Text>
      <Text> {paramKey3}</Text>
      
      
      <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
        Email Address  
      </Text>
      <Text> {paramKey4}</Text>
      
      
      </View>
    </View>

  );
}


export default DetailsScreen;
const height = Dimensions.get(window).height;
const width = Dimensions.get(window).width;

