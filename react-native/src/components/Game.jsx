'use strict';

import {StyleSheet, Text, View} from 'react-native';

let styles = StyleSheet.create({
  container: {
    color: 'red'
  }
});

export default class GameComponent extends React.Component {
  render(){
    return (
      <View>
        <Text >Walker</Text>
        <Text style={styles.container}>Walker</Text>
      </View>
    );
  }
}
