import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Block } from '../components';
import { Colors } from '../color';

const W = Dimensions.get('window').width;

const BgTop = ({ bgImg, bgColor }) => {
  return (
    <Block height={250}>
      <Block
        height={300}
        color={bgColor ? bgColor : Colors.blue}
        style={styles.bg}
      >
        <Image
          style={styles.imgDoctor}
          source={bgImg ? bgImg : require('../images/Drcorona.png')}
        />
        <Image style={styles.img} source={require('../images/virus.png')} />
      </Block>
    </Block>
  );
};

export default BgTop;

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: W * 2,
    height: 1000,
    top: -(950 - W / 2),
    left: -W / 2,
    alignSelf: 'center',
    borderRadius: 500,
    overflow: 'hidden',
  },
  img: {
    height: 250,
    width: W,
    position: 'absolute',
    bottom: 0,
    left: W / 2,
    alignSelf: 'center',
  },
  imgDoctor: {
    flex: 1,
    // width: W / 2,
    height: W,
    // width: 'auto',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -180,
    left: W / 2,
  },
});
