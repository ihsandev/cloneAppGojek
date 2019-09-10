import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = () => {
  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/sepak-bola.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.3,
            position: 'absolute',
            borderRadius: 6,
          }}
        />
        <View
          style={{
            width: 60,
            height: 15,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            marginTop: 8,
            fontWeight: 'bold',
            color: '#1C1C1C',
          }}>
          GO-NEWS
        </Text>
        <Text style={{fontSize: 14, color: '#7A7A7A', marginBottom: 11}}>
          Pemain Timnas Menang Telak 5-0 melawan Timnas Malaysia
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61A756',
            paddingHorizontal: 12,
            paddingVertical: 11,
            borderRadius: 4,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'white'}}>READ</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default GoNews;
