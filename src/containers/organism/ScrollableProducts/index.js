import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: 60,
            height: 15,
            marginLeft: 16,
          }}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginBottom: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
            Nearby Restaurants
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <View style={{paddingLeft: 16}}>
          <ScrollView horizontal style={{flexDirection: 'row'}}>
            <ScrollableItem
              title="KFC Alauddin"
              img={require('../../../assets/dummy/go-food-kfc.jpg')}
            />
            <ScrollableItem
              title="GM Hertasning"
              img={require('../../../assets/dummy/go-food-gm.jpg')}
            />
            <ScrollableItem
              title="Banka Perintis"
              img={require('../../../assets/dummy/go-food-banka.jpg')}
            />
            <ScrollableItem
              title="Orins Andalas"
              img={require('../../../assets/dummy/go-food-orins.jpg')}
            />
            <ScrollableItem
              title="Pak Boss Alauddin"
              img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
            />
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomColor: '#E8E9ED',
            borderBottomWidth: 1,
            marginTop: 16,
            marginHorizontal: 16,
            marginBottom: 20,
          }}
        />
      </View>
    );
  }
}

export default ScrollableProducts;
