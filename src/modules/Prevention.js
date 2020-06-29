import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, TextView } from '../components';
import PreventItem from './PreventItem';

const Prevention = () => {
  return (
    <Block margin={5}>
      <TextView h6 margin={5}>
        Prevention
      </TextView>
      <Block block>
        <PreventItem
          image={require('../images/wear_mask.png')}
          title="Wear face mask"
          description="Mọi người ủng hộ mình bằng cách #Like, #Share #Subscribe kênh để nhận thông báo nhé, xin cảm ơn !"
        />
        <PreventItem
          image={require('../images/wash_hands.png')}
          title="Wear face mask 2"
          description="Mọi người ủng hộ mình bằng cách #Like, #Share #Subscribe kênh để nhận thông báo nhé, xin cảm ơn !"
        />
      </Block>
    </Block>
  );
};

export default Prevention;

const styles = StyleSheet.create({});
