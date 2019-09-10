import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature/';

class HomeGopayFeature extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2C5FB8',
            padding: 14,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}>
          <Image source={require('../../../assets/icon/gopay.png')} />
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
            Rp. 50.000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            paddingBottom: 14,
            backgroundColor: '#2F65BD',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <GopayFeature
            title="Pay"
            img={require('../../../assets/icon/pay.png')}
          />
          <GopayFeature
            title="Nearby"
            img={require('../../../assets/icon/nearby.png')}
          />
          <GopayFeature
            title="Topup"
            img={require('../../../assets/icon/topup.png')}
          />
          <GopayFeature
            title="More"
            img={require('../../../assets/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeGopayFeature;
