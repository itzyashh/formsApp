import { StyleSheet, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import CustomTextInput from '@/src/components/CustomTextInput'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const personalInfoSchema = z.object({
  name: z.string({ message: 'Name is required' }).min(2).trim(),
  address: z.string({ message: 'Address is required' }).nonempty(),
  city: z.string({ message: 'City is required' }).nonempty(),
  postCode: z.string({ message: 'Post code is required' }).nonempty(),
  phoneNumber: z.string({ message: 'Phone number is required' }).nonempty(),
})

type PersonalInfo = z.infer<typeof personalInfoSchema>

const PersonalDetails = () => {


  const form = useForm<PersonalInfo>({resolver: zodResolver(personalInfoSchema)})
  const onSubmit: SubmitHandler<PersonalInfo> = (data) => {
    console.log('submit', data)

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