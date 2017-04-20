import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import Camera from 'react-native-camera';

const ROOT = 'https://gentle-escarpment-88131.herokuapp.com/api/products';

export default class Barcode extends Component {
  scanBarcode(data) {
    alert(data);
    }
  render () {
    return (
      <Camera
        ref={(cam) => { this.camera = cam; }}
        style={styles.preview}
        onBarCodeRead={code => this.scanBarcode(code)}
        aspect={Camera.constants.Aspect.fill}>
      </Camera>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});
