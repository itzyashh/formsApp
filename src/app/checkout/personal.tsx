import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomTextInput from '@/src/components/CustomTextInput'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'
import { colors } from '@/src/constants'

const PersonalDetails = () => {

  const [fullName, setFullName] = React.useState('')
  console.log(fullName)
  return (
    <KeyboardAvoidingScrollView>
      <CustomTextInput
        label='Full Name'
        placeholder='John Doe'
        value={fullName}
        onChangeText={setFullName}
      />
      <CustomTextInput
        label='Address'
        placeholder='123 Main St'
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <CustomTextInput
          label='City'
          placeholder='Manhattan'
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label='Post code'
          placeholder='10001'
          containerStyle={{ flex: 1 }}
          inputMode='numeric'
        />
      </View>
      <CustomTextInput
        label='Phone number'
        placeholder='123-456-7890'
        inputMode='tel'
      />





      <View style={styles.btnContainer}>
        <Link href="/checkout/payment" asChild>
          <CustomButton title="Next" />
        </Link>
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