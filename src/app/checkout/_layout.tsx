import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '@/src/constants'

const CheckoutLayout = () => {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
        <Stack.Screen name="personal" options={{headerTitle: 'Personal'}} />
        <Stack.Screen name="payment" options={{headerTitle: 'Payment'}} />
        <Stack.Screen name="confirm" options={{headerTitle: 'Confirm'}} />
    </Stack>
  )
}

export default CheckoutLayout