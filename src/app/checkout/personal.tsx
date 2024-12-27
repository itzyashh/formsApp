import { StyleSheet, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import CustomTextInput from '@/src/components/CustomTextInput'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { PersonalInfo, personalInfoSchema, useCheckoutForm } from '@/src/contexts/FormProvider'

const dummyData = {
  name: 'John Doe',
  address: '123 Main St',
  city: 'Manhattan',
  postCode: '10001',
  phoneNumber: '123-456-7890',
}

const PersonalDetails = () => {

  const {setPersonalInfo} = useCheckoutForm()
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: dummyData,
  })
  const onSubmit: SubmitHandler<PersonalInfo> = (data) => {
    setPersonalInfo(data)

    router.push('./payment')
  }

  return (
    <KeyboardAvoidingScrollView>
      <FormProvider {...form}>
      <CustomTextInput
        label='Full Name'
        placeholder='John Doe'
        name='name'
      />

      <CustomTextInput
        label='Address'
        placeholder='123 Main St'
        name='address'
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <CustomTextInput
          label='City'
          placeholder='Manhattan'
          containerStyle={{ flex: 1 }}
          name='city'
        />
        <CustomTextInput
          label='Post code'
          placeholder='10001'
          containerStyle={{ flex: 1 }}
          inputMode='numeric'
          name='postCode'
        />
      </View>
      <CustomTextInput
        label='Phone number'
        placeholder='123-456-7890'
        inputMode='tel'
        name='phoneNumber'
      />
      </FormProvider>




      <View style={styles.btnContainer}>
        <CustomButton title="Next" onPress={form.handleSubmit(onSubmit)} />
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 'auto',
  },
})