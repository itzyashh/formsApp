import { StyleSheet, Text, View } from 'react-native'
import React, { act, FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../constants'

type StepIndicatorProps = {
    headerProps: any
}

const StepIndicator: FC<StepIndicatorProps> = ({ headerProps }) => {

    const steps = [
        { key: 'personal', title: 'Personal' },
        { key: 'payment', title: 'Payment' },
        { key: 'confirm', title: 'Confirm' },
    ]

    const currentStep = headerProps.route.name

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            {steps.map(({ key, title }) => (
                <View
                 key={key} style={[styles.step, {borderBottomColor: key === currentStep ? colors.primary : colors.placeholder}]}>
                    <Text style={key === currentStep ? styles.active : styles.inactive}>{title}</Text>
                </View>
            ))}
        </SafeAreaView>
    )
}

export default StepIndicator

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        gap: 10,
    },
    step: { 
        flex: 1,
        backgroundColor: 'transparent',
         gap: 10,
         alignItems: 'center',
         borderBottomColor: colors.primary,
         borderBottomWidth: 3,
         },

    active: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 17,
        paddingBottom: 5,
    },
    inactive: {
        color: colors.placeholder,
        fontWeight: '600',
        fontSize: 17,
        paddingBottom: 5,
    },
})