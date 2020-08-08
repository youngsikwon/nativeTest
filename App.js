/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class SYJ extends Component{
    render() {
        let SyjImg = '';

        if(this.props.type == 'one'){

            SyjImg = require('./assets/SYJ.jpg');

        }else if(this.props.type == 'two'){

            SyjImg = require('./assets/SYJ2.jpg');
        }

        return (
            <View>
                <Image source ={SyjImg}
                style={{width : 200, height : 250}}/>
            </View>

        );
    }
}
const App: () => React$Node = () => {
  return (
      <View style = {styles.container}>
        <Text style = {styles.hello}>hello world good night</Text>
          <SYJ type='one'/>
          <SYJ type='two'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container : {
 flex : 1,
  justifyContent : "center",
    alignItems: "center"
  },
    hello : {

      color : 'blue',
        fontWeight : 'bold',
        fontSize : 30

    }
});

export default App;
