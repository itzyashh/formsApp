import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/src/components/CustomButton'
import { router } from 'expo-router'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/src/constants'
import InfoCard from '@/src/components/InfoCard'



const paymentInfo = { 
  "cardNumber": "1234123412341234",
  "expires": "01/30",
  "cvv": "123"
}

const ConfirmScreen = () => {

  const onSubmit = () => {
    console.log('Order confirmed');

    router.dismissAll(); // Dismiss all screens in the
    router.back()

  }

  return (
    <KeyboardAvoidingScrollView>
      <InfoCard />
    </KeyboardAvoidingScrollView>
  )
}

export default ConfirmScreen

const styles = StyleSheet.create({

})