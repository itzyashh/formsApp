import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CheckoutLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="personal" options={{headerTitle: 'Personal'}} />
        <Stack.Screen name="payment" options={{headerTitle: 'Payment'}} />
        <Stack.Screen name="confirm" options={{headerTitle: 'Confirm'}} />
    </Stack>
  )
}

export default CheckoutLayout