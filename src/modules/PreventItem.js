import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button, Block, TextView } from '../components';
import Feather from 'react-native-vector-icons/Feather';

const W = Dimensions.get('window').width;

const PreventItem = ({image, title, description}) => {
  return (
    <Button color="#fff" shadow borderRadius={8} padding={8} margin={5}>
      <Block direction="row">
        <Image
          style={styles.img}
          source={image}
        />
        <Block style={styles.text}>
          <TextView bold size={16} style={{ marginBottom: 8, marginTop: 8 }}>
            {title}
          </TextView>
          <TextView size={16}>
            {description}
          </TextView>
        </Block>
        <Block style={styles.icon}>
          <Feather name="chevron-right" size={24} />
        </Block>
      </Block>
    </Button>
  );
};

export default PreventItem;

const styles = StyleSheet.create({
  img: {
    width: (2 * W) / 5,
    height: (2 * W) / 5,
    resizeMode: 'contain',
  },
  text: {
    position: 'absolute',
    width: (3 * W) / 5,
    right: 0,
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
});
