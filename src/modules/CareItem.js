import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, TextView } from '../components';

const CareItem = ({color1, color2, number, title}) => {
  return (
    <Block middle block>
      {/* icon virus */}
      <Block
        color={color2}
        height={40}
        width={40}
        borderRadius={30}
        middle
        centered
      >
        <Block
          color={color2}
          height={30}
          width={30}
          borderRadius={20}
          border
          borderColor={color1}
          borderWidth={4}
        />
      </Block>
      <TextView h3 color={color1} padding={10}>
        {number}
      </TextView>
      <TextView h6 color="#aaa">
        {title}
      </TextView>
    </Block>
  );
};

export default CareItem;

const styles = StyleSheet.create({});
