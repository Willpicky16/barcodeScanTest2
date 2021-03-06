import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';

const ROOT = 'https://gentle-escarpment-88131.herokuapp.com/api/products';

export default class Barcode extends Component {
  scanBarcode(data) {
    getName(data.data);
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

function getName (EAN) {
  axios
      .get(`${ROOT}/${EAN}`)
      .then(function scanBarcode (data) {
        alert(`${data.data.products[0].name} (${EAN}) Packaging: ${data.data.products[0].packaging}`);
      })
      .catch(function (error) {
        // alert('Hello')
        postProduct(EAN);
    });
}

function postProduct (EAN) {
  axios
    .post(ROOT, {
      code: EAN,
      name: 'Test',
      packaging: 'Test Packaging'
    })
    .then((data) => {alert(`Product ${EAN} added as Test`)})
    .catch((err) => {alert(`Product ${EAN} already in Database - Please scan again!`)});
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
