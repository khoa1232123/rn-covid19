import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block, TextView } from '../components';
import SymptomItem from './SymptomItem';

const Symptoms = () => {
  return (
    <Block margin={5}>
      <TextView h6 margin={5}>Symptoms</TextView>
      <Block direction="row" justifyContent="space-around">
        <SymptomItem
          image={require('../images/headache.png')}
          title="Headache"
        />
        <SymptomItem image={require('../images/caugh.png')} title="Caugh" />
        <SymptomItem image={require('../images/fever.png')} title="Fever" />
      </Block>
    </Block>
  );
};

export default Symptoms;

const styles = StyleSheet.create({});
