import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Block, Button, TextView } from '../components'

const SymptomItem = ({image, title}) => {
  return (
    <Block padding={10} block middle color="#fff" shadow borderRadius={8} margin={5}>
      <Button>
        <Image source={image} />
        <TextView h6 center>{title}</TextView>
      </Button>
    </Block>
  )
}

export default SymptomItem

const styles = StyleSheet.create({})
