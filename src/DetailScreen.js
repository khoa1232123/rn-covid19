import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import BgTop from './modules/BgTop'
import { Block } from './components'
import Symptoms from './modules/Symptoms'
import Prevention from './modules/Prevention'

const DetailScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fafafa' }}>
      <Block block>
        <BgTop bgImg={require('./images/coronadr.png')} />
        <Symptoms />
        <Prevention />
      </Block>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
