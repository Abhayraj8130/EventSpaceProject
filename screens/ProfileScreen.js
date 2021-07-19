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
  ScrollView,
  
} from 'react-native';

import {Avatar} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


function ProfileScreen({navigation}) {
  const [FirstName, setFirstName] = React.useState();
  const [Lastname, setLastname] = React.useState();
  const [mobileNumber, setmobileNumber] =React.useState();
  const [EmailAddress, setEmailAddress] = React.useState();
  

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assests/backcover.jpg')}
        style={{width: 420, height: 100}}>
            <View style={{flexDirection:'row',}}>
              <Ionicons
              name="notifications-outline"
              size={27}
              color="green"
              backgroundColor="green"
              style={{ marginLeft:320,
                marginTop:10
              }}
            
            />
            <FontAwesome
              name="dedent"
              size={27}
              color="green"
              backgroundColor="green"
              style={{ marginLeft: 20,
                marginTop:10
              }}
            
            />
          
            
      
        
          </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>
        <Avatar.Image
            source={{uri:'https://www.thecharlestonphotographer.com/wp-content/uploads/2015/02/professional-business-portrait-photography-by-charleston-headshot-photographers-king-street-studios-21.jpg'}}
            size={120}
            style={{
              
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          />
          
      
        </View>
      </ImageBackground>
      <ScrollView>
      <View style={{marginLeft:20,marginTop:70}}>
        <View></View>
        <Text style={styles.text}>
          First name 
        </Text>
        <TextInput
          value={FirstName}
          placeholder="   Enter your first name"
          
          onChangeText={FirstName => setFirstName(FirstName)}
        
          style={styles.textinput}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          Last name
        </Text>
        <TextInput
          value={Lastname}
          placeholder="your last name"
          onChangeText={Lastname => setLastname(Lastname)}
     
          style={styles.textinput}
        />

        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          Contact number 
        </Text>
        <TextInput
          style={styles.textinput}
          value={mobileNumber}
          
          placeholder="Enter mobile number"
          onChangeText={mobileNumber => setmobileNumber(mobileNumber)}
        />
        
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          Email Address
        </Text>
        <TextInput
          style={styles.textinput}
          value={EmailAddress}
         
          placeholder="xyz@gmail.com"
          
          onChangeText={EmailAddress => setEmailAddress(EmailAddress)}
          
        />
        
        <View style={{marginBottom: 30}}>
          <TouchableOpacity
            onPress={() =>navigation.navigate('Details', 
            { paramKey1: FirstName,
              paramKey2: Lastname,
              paramKey3: mobileNumber,
              paramKey4: EmailAddress,
              
          })
            }
            
            style={styles.userBtn}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>

  );
}


export default ProfileScreen;


const styles = StyleSheet.create({
  
  userBtn: {
    backgroundColor: '#f9b34c',
    padding: 7,
    width: '90%',
    borderRadius: 30,
    marginTop: 20,
    marginLeft:10
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },

 textinput: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 6,
    borderWidth:1,
    borderColor:'#006400',
    borderRadius: 20,
  },
  text:{
    fontWeight: 'bold', 
    fontSize: 16, 
    margin: 15
  }
});