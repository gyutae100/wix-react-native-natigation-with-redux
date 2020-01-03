import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    //console.log('yyyyyyyyyy');

    //console.log(buttonId);

    if (buttonId == 'menuButtons') {
      Navigation.mergeOptions('leftSideMenu', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }

    if (buttonId == 'menuButtons2') {
      Navigation.mergeOptions('rightSideMenu', {
        sideMenu: {
          right: {
            visible: true,
          },
        },
      });
    }

    if (buttonId == 'fadButton') {
      //모달을 띄우자
    }
  }

  static get options() {
    return {
      topBar: {
        visible: true,
        translucent: true,
        background: {
          color: 'red',
        },
        leftButtons: {
          id: 'menuButtons',
          icon: require('../../Images/test.png'),
        },
        rightButtons: {
          id: 'menuButtons2',
          icon: require('../../Images/test.png'),
        },
      },
    };
  }

  render = () => {
    console.log('this.props', this.props);

    return (
      <View style={styles.container}>
        <Text> {this.props.state.counter.number}</Text>

        <Button
          onPress={() => {
            this.props.increase();
          }}
          title="+1"
        />

        <Button
          onPress={() => {
            this.props.decrease();
          }}
          title="-1"
        />

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

        <Button
          onPress={() => {
            console.log(Navigation.push);
            Navigation.push(this.props.componentId, {
              component: {
                name: 'src.screens.SecondScreen',
              },
            });
          }}
          title="View next screen"
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
