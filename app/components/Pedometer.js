import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import {Pedometer} from 'react-native-pedometer';
import GoogleFit from 'react-native-google-fit';


 


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }


    


  render() {
    GoogleFit.authorize((err, result) => {
      if(err) {
          dispatch('AUTH ERROR');
          return;
      }
      dispatch('AUTH SUCCESS');
    });
    return (
      <View behavior="padding" style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <View style = {styles.window}>
            <TextInput
              autoCorrect={false}
              placeholder="Username"
              placeholderTextColor="white"
              style={styles.textInput}
              clearButtonMode="always"
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          </View>
          <TouchableOpacity
                style={styles.buttonContainer}
                //onPress={this.authorizeAccount}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  textInput: {
    backgroundColor: 'rgba(128,0,0,0)',
    color: 'white',
    height: 40,
    width: 300,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(128,0,0,1)",
    height: 40,
    width: 300,
    marginTop: 15,
    borderRadius: 50
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  window: {
    marginBottom: 10
  }
});
