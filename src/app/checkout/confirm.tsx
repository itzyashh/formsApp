import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/src/components/CustomButton'
import { router } from 'expo-router'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/src/constants'
import InfoCard from '@/src/components/InfoCard'
import { useCheckoutForm } from '@/src/contexts/FormProvider'

const ConfirmScreen = () => {

  const {paymentInfo, personalInfo} = useCheckoutForm()

  if (!paymentInfo || !personalInfo) return null

  const transformData = {
    ...Object.fromEntries(Object.entries(paymentInfo).map(([key, value]) => [key, value.toString()])),
  }

  const onSubmit = () => {
    console.log('Order confirmed');

    router.dismissAll(); // Dismiss all screens in the
    router.back()

  }

  return (
    <KeyboardAvoidingScrollView>
      <InfoCard data={personalInfo} title="Personal Info" />
      <InfoCard data={transformData} title="Payment Info" />
    </KeyboardAvoidingScrollView>
  )
}

export default ConfirmScreen

const styles = StyleSheet.create({

})