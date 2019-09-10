import React, {Component} from 'react';
import {View} from 'react-native';
import NavbarIcon from '../../../components/molecules/NavbarIcon';

class Navbar extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: 54,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: '#F2F2F4',
        }}>
        <NavbarIcon
          img={require('../../../assets/icon/home-active.png')}
          title="Home"
          active
        />
        <NavbarIcon
          img={require('../../../assets/icon/order.png')}
          title="Orders"
        />
        <NavbarIcon
          img={require('../../../assets/icon/help.png')}
          title="Help"
        />
        <NavbarIcon
          img={require('../../../assets/icon/inbox.png')}
          title="Inbox"
        />
        <NavbarIcon
          img={require('../../../assets/icon/account.png')}
          title="Account"
        />
      </View>
    );
  }
}

export default Navbar;
