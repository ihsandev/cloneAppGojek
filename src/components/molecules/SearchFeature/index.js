import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{paddingTop: 15, flexDirection: 'row', marginHorizontal: 17}}>
      <View style={{position: 'relative', flex: 1, paddingBottom: 6}}>
        <TextInput
          placeholder="What do You wanna eat ?"
          style={{
            borderWidth: 1,
            borderColor: '#EBEBEB',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={{
            position: 'absolute',
            top: 7,
            left: 7,
          }}
        />
      </View>
      <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFeature;
