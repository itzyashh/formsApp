import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'

type CustomTextInputProps = {
    label?: string
    containerStyle?: View['props']['style']
} & TextInput['props']

const CustomTextInput: FC<CustomTextInputProps> = ({ label, containerStyle, ...textInputProps }) => {
    const error = undefined
    return (
        <View style={containerStyle}>
        {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                {...textInputProps}
                style={[styles.input, error && styles.errorInput, textInputProps.style]}
            />
        <Text numberOfLines={1} style={styles.error}>{error?.message}</Text>
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    label: {
        color: '#2e184f',
        fontSize: 15,
        marginBottom: 7,
    },
    input: {
        borderBottomColor: '#ac84e6',
        borderBottomWidth: 1,
        color: '#2e184f',
        maxHeight: 40,
    },
    errorInput: {
        borderBottomColor: 'crimson',
    },
    error: {
        color: 'crimson',
        fontSize: 13,
        marginTop: 5,
        marginBottom: 10,
    },
})