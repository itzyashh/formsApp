import { StyleSheet, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import CustomTextInput from '@/src/components/CustomTextInput'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const paymentInfoSchema = z.object({
  cardNumber: z.coerce.number({ message: 'Card number is required' }),
  expires: z.string({ message: 'Expires is required' }).regex(new RegExp('^(0[1-9]|1[0-2])\/[0-9]{2}$'), { message: 'Please use the MM/YY format' }),
  cvv: z.coerce.number({ message: 'CVV is required' }).min(100).max(999),
})

type PaymentInfo = z.infer<typeof paymentInfoSchema>

const PaymentScreen = () => {
  const form = useForm<PaymentInfo>({ resolver: zodResolver(paymentInfoSchema) })

  const onPaymentSubmit: SubmitHandler<PaymentInfo> = (data) => {
    console.log('Payment submitted', data)

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