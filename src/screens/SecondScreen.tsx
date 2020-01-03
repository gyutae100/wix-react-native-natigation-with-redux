import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Second</Text>
        <Button
          onPress={() => {
            console.log(Navigation.push);
            Navigation.push(this.props.componentId, {
              component: {
                name: 'src.screens.MainScreen',
              },
            });
          }}
          title="View next screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
