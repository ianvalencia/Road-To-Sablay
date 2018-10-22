import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./app/components/Login";
import Register from "./app/components/Register";
import Pedometer from "./app/components/Pedometer";

import { StackNavigator } from "react-navigation";

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerTintColor:'16a085',
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
      headerStyle: {
        backgroundColor: '#16a085',
        borderColor: '#16a085'
      },
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register",
      headerStyle: {
        backgroundColor: '#16a085',
        borderColor: '#16a085'
      },
    }
  },
  Pedometer: {
    screen: Pedometer,
    navigationOptions: {
      title: "Pedometer",
      headerStyle: {
        backgroundColor: '#16a085',
        borderColor: '#16a085'
      },
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});