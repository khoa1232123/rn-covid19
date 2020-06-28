import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, TextView, Button } from '../components';
import CareItem from './CareItem';
import { Colors } from '../color';

const CaseUpdate = () => {
  return (
    <Block margin={10}>
      <Block justifyContent="space-between" direction="row">
        <Block>
          <TextView h6>Case Update</TextView>
          <TextView>Newest Update June 28</TextView>
        </Block>
        <Button textColor={Colors.blue1} style={{ marginTop: 2 }}>
          See details
        </Button>
      </Block>
      <Block
        color="#fff"
        padding={8}
        borderRadius={5}
        shadow
        style={{ marginTop: 10 }}
        direction="row"
      >
        <CareItem
          number={1935}
          title="Intected"
          color1={Colors.carot}
          color2={Colors.carot_op}
        />
        <CareItem
          number={566}
          title="Deaths"
          color1={Colors.red}
          color2={Colors.red_op}
        />
        <CareItem
          number={15}
          title="Recovered"
          color1={Colors.green}
          color2={Colors.green_op}
        />
      </Block>
    </Block>
  );
};

export default CaseUpdate;

const styles = StyleSheet.create({});
