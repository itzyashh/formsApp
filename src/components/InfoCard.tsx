import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../constants'
import { Feather } from '@expo/vector-icons'

type InfoCardProps = {
  data: Record<string, string> 
  title?: string
}

const InfoCard:FC<InfoCardProps> = ({data, title}) => {
  return (
    <View>
            <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Feather name="edit-3" size={24} color={colors.secondary} />
        </View>
      {Object.entries(data).map(([key, value]) => (
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