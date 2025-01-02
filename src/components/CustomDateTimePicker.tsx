import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { colors } from '../constants'
import CustomTextInput from './CustomTextInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useController } from 'react-hook-form';
import dayjs from 'dayjs';

type CustomDateTimePickerProps = {
    label?: string
    placeholder?: string
    name: string
}

const CustomDateTimePicker: FC<CustomDateTimePickerProps> = ({ label, placeholder, name }) => {

    const {
        field: { value, onChange, onBlur },
        fieldState: { error },
    } = useController({name})
    console.log(value)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
    const formattedDate = dayjs(date).format('DD/MM/YYYY')
    onChange(formattedDate)
      hideDatePicker();
    };

    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <Text onPress={showDatePicker}
             style={[styles.input, {
                    borderBottomColor: error ? colors.error : colors.secondary,
                    borderBottomWidth: 0.5,
                    color: value ? colors.white : colors.placeholder,
             }]}
             >{value || placeholder}</Text>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                date={new Date()}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                style={{
                    backgroundColor: colors.white,
                }}
                textColor={colors.primary}
                accentColor='#00ff88'
            />
            <Text numberOfLines={1} style={styles.error}>{error?.message}</Text>
        </View>
    )
}

export default CustomDateTimePicker

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
    error: {
        color: colors.error,
        fontSize: 13,
        marginTop: 5,
        marginBottom: 10,
    },
})