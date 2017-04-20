import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import { Form, PickerField } from "react-native-form-generator";

import postcodes from "./data/postcodes";

const onButtonPress = () => {
  alert('Button has been pressed!');
};

export default class PostcodeFormView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Welcome to RecycaScan</Text>
        <View style={styles.container}>
          <Form
            ref="registrationForm"
            label="hello">
            <PickerField
              ref="postcode"
              label="Please enter your Postcode:"
              options={postcodes}/>
              <Button
              title="Submit"
              onPress={onButtonPress}
              color="#841584"
              accessibilityLabel="Submit"
            />
          </Form>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20
  },
  container: {
    flex: 1
  }
});
