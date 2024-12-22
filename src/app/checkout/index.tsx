import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Page = () => {
    // console.log('Redirecting to /checkout/personal')
  return <Redirect href="/checkout/personal" />
}

export default Page