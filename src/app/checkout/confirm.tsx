import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/src/components/CustomButton'
import { router } from 'expo-router'

const ConfirmScreen = () => {

  const onSubmit = () => {
    console.log('Order confirmed');

    router.dismissAll(); // Dismiss all screens in the
    router.back()

  }

  return (
    <View style={styles.container}>
      <CustomButton title="Confirm" onPress={onSubmit} />
    </View>
  )
}

export default ConfirmScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})