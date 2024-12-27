import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '@/src/constants'
import FormProvider from '@/src/contexts/FormProvider'
import StepIndicator from '@/src/components/StepIndicator'

const CheckoutLayout = () => {
  return (
    <FormProvider>

    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
      header: (headerProps) => <StepIndicator headerProps={headerProps} />,
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
    </FormProvider>
  )
}

export default CheckoutLayout