import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { Feather } from '@expo/vector-icons'

type PersonalInfoProps = {
    fullName: string
    address: string
    city: string
    postcode: string
    phone: string
    country: string
    }

    const personalInfo = {
        "fullName": "Vadim Savin",
        "address": "Poblenou",
        "city": "Barcelona",
        "postcode": "1234",
        "phone": "60123123123",
        "country": "ES"
      }



const InfoCard = () => {
  return (
    <View>
            <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Text style={styles.title}>Personal Information</Text>
        <Feather name="edit-3" size={24} color={colors.secondary} />
        </View>
      {Object.entries(personalInfo).map(([key, value]) => (
        <View key={key} >
          <Text style={{color:colors.label}}>{key}: {value}</Text>
        </View>
      ))}
      </View>
    </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        color: colors.secondary,
      },
      infoContainer: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.primary,
      },
})