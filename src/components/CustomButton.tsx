import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import React, { forwardRef } from 'react';
import { colors } from '../constants';

type CustomButtonProps = {
    title: string;
} & PressableProps;

const CustomButton = forwardRef<View, CustomButtonProps>(({ title, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
});

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.button,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 45,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});