import { StyleSheet, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import CustomTextInput from '@/src/components/CustomTextInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentInfo, paymentInfoSchema, useCheckoutForm } from '@/src/contexts/FormProvider'
const dummyData = {
  cardNumber: 123456781234567,
  expires: '12/23',
  cvv: 123,
}

const testing = true

const PaymentScreen = () => {
  const form = useForm<PaymentInfo>({ 
    resolver: zodResolver(paymentInfoSchema),
    defaultValues: dummyData,
  })
  const { setPaymentInfo } = useCheckoutForm()

  const onPaymentSubmit: SubmitHandler<PaymentInfo> = (data) => {
    setPaymentInfo(data)

    router.push('/checkout/confirm')
  }



  return (
    <View style={styles.container}>
      <KeyboardAvoidingScrollView>
        <FormProvider {...form}>
          <CustomTextInput
            name='cardNumber'
            label='Card Number'
            placeholder='1234 5678 1234 5678'
            keyboardType='numeric'
            textContentType='creditCardNumber'
          />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CustomTextInput
              label='Expires'
              placeholder='MM/YY'
              inputMode='numeric'
              name='expires'
              containerStyle={{ flex: 1 }}
            />
            <CustomTextInput
              label='CVV'
              placeholder='123'
              inputMode='numeric'
              name='cvv'
              containerStyle={{ flex: 1 }}
              maxLength={3}
            />
          </View>
        </FormProvider>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={form.handleSubmit(onPaymentSubmit)}
            title="Next" />
        </View>
      </KeyboardAvoidingScrollView>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    marginTop: 'auto',
  },
})