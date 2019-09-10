import React from 'react';
import {View, Text, Image} from 'react-native';

const GopayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.img} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 14,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GopayFeature;
