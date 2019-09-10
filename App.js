/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, ScrollView} from 'react-native';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organism/ScrollableProducts';
import SearchFeature from './src/components/molecules/SearchFeature';
import Navbar from './src/containers/organism/Navbar';
import HomeMainFeature from './src/containers/organism/HomeMainFeature';
import HomeGopayFeature from './src/containers/organism/HomeGoPayFeature';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* search bar */}
      <SearchFeature />
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* gopay */}
        <HomeGopayFeature />
        {/* main feature */}
        <HomeMainFeature />
        {/* Go News */}
        <GoNews />
        {/* Internal section gojek */}
        <GoInfo />
        {/* go-food banner */}
        <GoBanner />
        {/* Nearby go-food */}
        <ScrollableProducts />
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default App;
