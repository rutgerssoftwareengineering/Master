import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={{ flex: 1}}>
              <Text
                style={styles.titleText}>
                Home
              </Text>
            </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
      backgroundColor: 'transparent',
      fontSize: 100,
      color: '#fff',
      textAlign: 'center',
      marginTop: 50
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

