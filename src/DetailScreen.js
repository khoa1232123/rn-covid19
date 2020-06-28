import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import BgTop from './modules/BgTop'
import { Block } from './components'

const DetailScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fafafa' }}>
      <Block block>
        <BgTop bgImg={require('./images/coronadr.png')} />
      </Block>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
