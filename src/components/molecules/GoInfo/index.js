import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoInfo = () => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View
        style={{
          width: 60,
          height: 15,
          marginLeft: -4,
        }}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginVertical: 8,
        }}>
        Complete your profile
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 11}}>
        <View>
          <Image
            source={require('../../../assets/dummy/facebook-connect.png')}
          />
        </View>
        <View style={{marginLeft: 16, flex: 1, width: '70%'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4A4A4A'}}>
            Connect with Facebook
          </Text>
          <Text style={{fontSize: 16, color: '#4A4A4A'}}>
            Log in faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          borderRadius: 4,
          alignSelf: 'flex-end',
          marginBottom: 16,
        }}>
        <Text style={{color: 'white'}}>CONNECT</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default GoInfo;
