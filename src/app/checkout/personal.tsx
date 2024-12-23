import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomTextInput from '@/src/components/CustomTextInput'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import { colors } from '@/src/constants'
import { useForm, SubmitHandler, Controller, FormProvider } from "react-hook-form"

const PersonalDetails = () => {
  const form = useForm()
  const onSubmit = () => {
    console.log('submit')

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