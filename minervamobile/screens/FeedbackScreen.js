// <Text style={styles.buttonText}>Slow Down</Text>

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
//import { MonoText } from '../components/StyledText';

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  onSlowDown(){
    Alert.alert('You asked to slow down')
  }

  onSpeedUp(){
    Alert.alert('You asked to speed up')
  }

  onVolDown(){
    Alert.alert('You asked to lower Volume')
  }

  onVolUp(){
    Alert.alert('You asked to Speak Up')
  }

  onThumbDown(){
    Alert.alert('You dont understand :( ')
  }

  onThumbUp(){
    Alert.alert('You understand! :)')
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={styles.gradientContainer}>

              <Text
                style={styles.header}>
                  Software Engineering
              </Text>

              <View style={styles.rowContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onSlowDown.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/slow_down.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onSpeedUp.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/speed_up.png')}
                  />
                </TouchableOpacity>
                
              </View>

              <View style={styles.rowContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onVolDown.bind(this)}
                >
                  <Image 
                    style={styles.icon2}
                    source={require('../assets/images/feedback/vol_down.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onVolUp.bind(this)}
                >
                  <Image 
                    style={styles.icon2}
                    source={require('../assets/images/feedback/vol_up.png')}
                  />
                </TouchableOpacity>
              
              </View>


              <View style={styles.rowContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onThumbDown.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/thumb_up.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onThumbUp.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/thumb_down.png')}
                  />
                </TouchableOpacity>  
              
              </View>

            </LinearGradient>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
    marginTop: 75
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  button: {
    height: 180,
    width: 180,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
  },
  icon: {
    height: 150,
    width: 150,
  },
  icon2: {
    height: 100,
    width: 150,
  },
  buttonText: {
    color: '#fff',
  }
});
