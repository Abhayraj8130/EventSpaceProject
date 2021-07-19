import * as React from 'react';
import {useState} from 'react';
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
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function TrackProfileScreen() {
  const image = require('../assests/truck.jpg');
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>Truck Profiles</Text>
        <View style={{justifyContent:'space-between', paddingLeft:120,paddingVertical:18,flexDirection:'row'}}>
        <View style={{paddingRight:20}}>
        <FontAwesome name='cart-plus'size={27} color='#33D2FF'/>
        </View>
        <FontAwesome name='dedent'size={27} color='#33D2FF'/>
        
        </View>
        </View>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
    
             <FontAwesome
              name="search"
              size={20}
              color="green"
              backgroundColor="green"
              
            />
          
           <TextInput 
            style={{borderWidth:1,borderRadius:20,padding:10,margin:18,}} 
            fontSize={20} 
            placeholder="     Search food truck/tents by name"/>
          
    
          
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <ScrollView><View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
          marginTop:10
        }}>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
          <View>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'red'}}>Closed</Text>
            <Text>Cuisine is not available</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 130}}>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'green'}}>Open</Text>
            <Text>Cuisine is not available</Text>
          </View>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />

          <View>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'red'}}>Closed</Text>
            <Text>Cuisine is not available</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 130}}>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'red'}}>Closed</Text>
            <Text>Cuisine is not available</Text>
          </View>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
          <View>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'green'}}>Open</Text>
            <Text>Cuisine is not available</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 130}}>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'red'}}>Closed</Text>
            <Text>Cuisine is not available</Text>
          </View>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
        </View>
        <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
          <View>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'green'}}>Open</Text>
            <Text>Cuisine is not available</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
          backgroundColor: 'white',
          margin: 5,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 130}}>
            <Text>nisha Truck</Text>
            <Text>506.91 mils Away</Text>
            <Text style={{color: 'green'}}>Open</Text>
            <Text>Cuisine is not available</Text>
          </View>
          <Image
            source={image}
            style={{width: 100, height: 60, margin: 10}}
          />
        </View>
      </View>
      </View>
    </ScrollView>
    </View>
  </View>    
  );
}


export default TrackProfileScreen;
const styles=StyleSheet.create({
  header:{
      width:'100%',
      height:70,
      backgroundColor:'white',
      elevation:10
  },
  title:{
      fontSize:24,
      fontWeight:'400',
      textAlign:'left',
      justifyContent:'flex-start',
      paddingVertical:20,
      padding:5
  
  

  },
})