import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeature = props => {
  return (
    <View
      style={{width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          width: 58,
          height: 58,
          borderColor: '#EFEFEF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={props.img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          marginTop: 6,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainFeature;
