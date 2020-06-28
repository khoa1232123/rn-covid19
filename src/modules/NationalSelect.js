import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, Button, TextView } from '../components';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../color';

const NationalSelect = () => {
  return (
    <Block>
      <Button color="#fff" margin={10} border borderRadius={30}>
        <Block direction="row" padding={10} middle>
          <Feather name="map-pin" size={16} color={Colors.blue1} />
          <Block block paddingHorizontal={8}>
            <TextView h6>Indonesia</TextView>
          </Block>
          <Feather name="chevron-down" size={16} color={Colors.blue1} />
        </Block>
      </Button>
    </Block>
  );
};

export default NationalSelect;

const styles = StyleSheet.create({});
