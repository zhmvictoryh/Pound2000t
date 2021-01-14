import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          key: '1',
          title: 'example title 1',
          subtitle: 'example subtitle 1',
        },
        {
          key: '2',
          title: 'example title 2',
          subtitle: 'example subtitle 2',
        },
        {
          key: '3',
          title: 'example title 3',
          subtitle: 'example subtitle 3',
        },
      ],
    };
  }

  list = () => {
    return this.state.array.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
        </View>
      );
    });
  };

  render() {
    return <View>{this.list()}</View>;
  }
}