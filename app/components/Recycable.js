import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const ROOT = 'https://gentle-escarpment-88131.herokuapp.com/api/products';

export default class Recyable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    }
  }
  componentDidMount() {
    axios
        .get(`${ROOT}/${this.props.navigation.state.params.code}`)
        .then((res) => {
          if (res.data) {
            this.setState({
              data: res.data.products[0],
              loading: false
            });
          }
          console.log(this.state);
          // alert(`${data.data.products[0].name} (${EAN}) Packaging: ${data.data.products[0].packaging}`);
        })
        .catch(function (error) {
          throw(error);
          // postProduct(EAN);
      });
  }
  render () {
    if (this.state.loading) return (
      <View style={styles.container}>
        <Text style={styles.loading}>loading....</Text>
      </View>
    )
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.data.name} ({this.state.data.code})</Text>
        <Text style={styles.subtitle}>Packaging: {this.state.data.packaging}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
      color: 'blue',
      fontSize: 25
    },
    subtitle: {
      fontSize: 20
    },
    loading: {
      color: 'red',
      fontSize: 30
    }
});
