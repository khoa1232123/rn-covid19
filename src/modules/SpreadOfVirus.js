import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Block, TextView, Button } from '../components';
import { Colors } from '../color';

const SpreadOfVirus = () => {
  return (
    <Block margin={10}>
      <Block justifyContent="space-between" direction="row">
        <Block>
          <TextView h6>Spread of Virus</TextView>
        </Block>
        <Button textColor={Colors.blue1} style={{ marginTop: 2 }}>
          See details
        </Button>
      </Block>

      <Block
        color="#fff"
        borderRadius={5}
        shadow
        style={{ marginTop: 10 }}
        direction="row"
      >
        <Image style={styles.map} source={require('../images/map.png')} />
      </Block>
    </Block>
  );
};

export default SpreadOfVirus;

const styles = StyleSheet.create({
  map: {
    width: '100%',
  },
});
