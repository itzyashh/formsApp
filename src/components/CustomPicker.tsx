import { StyleSheet, Text, View } from 'react-native'
import React, { ComponentProps, FC } from 'react'
import  RNPickerSelect  from 'react-native-picker-select';
import { colors } from '../constants';
import { useController } from 'react-hook-form';

type CustomPickerProps = {
    label?: string
    name: string
    containerStyle?: View['props']['style']
} & ComponentProps<typeof RNPickerSelect>

const CustomPicker:FC<CustomPickerProps> = ({label, name, containerStyle, ...pickerProps}) => {

    const {field:{value,onChange, onBlur}, fieldState:{error}} = useController({        name    })

  return (
    <View style={[styles.container,containerStyle]}>
    {label && <Text style={styles.label}>{label}</Text>}
        <RNPickerSelect
            {...pickerProps}
            value={value}
            onValueChange={onChange}
            onClose={onBlur}
            useNativeAndroidPickerStyle
            style={{
                viewContainer: {
                    ...styles.input,
                    borderBottomColor: error ? colors.error : colors.secondary,
                    borderBottomWidth: 0.5,
                },
                placeholder: {
                    color: colors.placeholder,
                },
                inputIOS: {
                    ...styles.input,
                },
                inputAndroid: {
                    ...styles.input,
                    maxHeight: undefined,
                },
            }}
        />
        <Text numberOfLines={1} style={styles.error}>{error?.message}</Text>
    </View>
  )
}

export default CustomPicker

const styles = StyleSheet.create({
    container: {
        marginBottom: 7,
    },
        label: {
            color: colors.label,
            fontSize: 15,
            marginBottom: 7,
        },
        input: {
            borderBottomColor: 'transparent',
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