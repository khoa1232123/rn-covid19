import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Block, Button, TextView } from './components';
import { Colors } from './color';
import CaseUpdate from './modules/CaseUpdate';
import SpreadOfVirus from './modules/SpreadOfVirus';
import NationalSelect from './modules/NationalSelect';
import BgTop from './modules/BgTop';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor: '#fafafa' }}>
      <Block block>
        <BgTop />
        <NationalSelect />
        <CaseUpdate navigation={navigation} />
        <SpreadOfVirus />
      </Block>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
});
