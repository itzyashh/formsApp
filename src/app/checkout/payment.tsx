import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Link href="/checkout/confirm" asChild>
        <CustomButton title="Next" />
      </Link>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})