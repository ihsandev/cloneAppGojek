import React from 'react';
import {View, Text, Image} from 'react-native';

const NavbarIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={props.img} />
      <Text style={{color: props.active ? '#61A756' : '#545454'}}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavbarIcon;
