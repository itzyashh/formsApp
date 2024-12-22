import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomTextInput from '@/src/components/CustomTextInput'
import KeyboardAvoidingScrollView from '@/src/components/KeyboardAvoidingScrollView'

const PersonalDetails = () => {

  const [fullName, setFullName] = React.useState('')
  console.log(fullName)
  return (
    <KeyboardAvoidingScrollView>
      <CustomTextInput
        label='Full Name'
        placeholder='John Doe'
        placeholderTextColor={'#ab84e69e'}
        value={fullName}
        onChangeText={setFullName}
      />
      <CustomTextInput
        label='Address'
        placeholder='123 Main St'
        placeholderTextColor={'#ab84e69e'}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <CustomTextInput
          label='City'
          placeholder='Manhattan'
          containerStyle={{ flex: 1 }}
          placeholderTextColor={'#ab84e69e'}
        />
        <CustomTextInput
          label='Post code'
          placeholder='10001'
          containerStyle={{ flex: 1 }}
          inputMode='numeric'
          placeholderTextColor={'#ab84e69e'}
        />
      </View>
      <CustomTextInput
        label='Phone number'
        placeholder='123-456-7890'
        inputMode='tel'
        placeholderTextColor={'#ab84e69e'}
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
  container: {
    flexGrow: 1,
    gap: 20,
    padding: 10,
  },
  btnContainer: {
    marginTop: 'auto',
  },
})