import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../constants'
import { FieldError, useController } from 'react-hook-form'

type CustomTextInputProps = {
    label?: string
    containerStyle?: View['props']['style']
    name: string
} & TextInput['props']

const CustomTextInput: FC<CustomTextInputProps> = ({ label, name ,containerStyle, ...textInputProps }) => {
    const { 
        field: {value, onChange, onBlur},
        fieldState: {error},
     } = useController({name: name, rules: {required: 'This field is required'}})
    return (
        <View style={containerStyle}>
        {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                {...textInputProps}
                placeholderTextColor={colors.placeholder}
                style={[styles.input, error && styles.errorInput, textInputProps.style]}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
            />
        <Text numberOfLines={1} style={styles.error}>{error?.message}</Text>
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    label: {
        color: colors.label,
        fontSize: 15,
        marginBottom: 7,
    },
    input: {
        borderBottomColor: colors.secondary,
        borderBottomWidth: 0.5,
        color: colors.white,
        maxHeight: 40,
    },
    errorInput: {
        borderBottomColor: colors.error,
    },
    error: {
        color: colors.error,
        fontSize: 13,
        marginTop: 5,
        marginBottom: 10,
    },
})