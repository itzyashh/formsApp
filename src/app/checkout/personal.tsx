import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CustomButton from '@/src/components/CustomButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomTextInput from '@/src/components/CustomTextInput'

const PersonalDetails = () => {

  const [fullName, setFullName] = React.useState('')
  console.log(fullName)
  return (
    <View style={styles.container}>
        <Text>Personal Details</Text>
        <View style={{height: 20}} />
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





        <View style={styles.btnContainer}>
      <Link href="/checkout/payment" asChild>
          <CustomButton title="Next" />
      </Link>
        </View>
    </View>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  btnContainer: {
    marginTop: 'auto',
  },
})