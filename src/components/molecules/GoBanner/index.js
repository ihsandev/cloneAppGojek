import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoBanner = () => {
  return (
    <View
      style={{
        padding: 16,
      }}>
      <View
        style={{
          position: 'relative',
        }}>
        <Image
          source={require('../../../assets/dummy/food-banner.jpg')}
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
        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            left: 0,
            flexDirection: 'row',
            paddingBottom: 16,
            paddingHorizontal: 16,
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Free GO-FOOD vouchers
            </Text>
            <Text style={{color: 'white'}}>Quick, before they runout!</Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                borderRadius: 4,
                marginLeft: 10,
                alignSelf: 'stretch',
              }}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 10}}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoBanner;
