import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, ScrollView } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../constants'


type KeyboardAvoidingScrollViewProps = {
    children: ReactNode
}

const KeyboardAvoidingScrollView: FC<KeyboardAvoidingScrollViewProps> = ({ children }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: colors.background }}
            keyboardVerticalOffset={110}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <SafeAreaView style={{ flex: 1 }} edges={['bottom']} >
                    {children}
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidingScrollView

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        gap: 20,
        padding: 10,
        backgroundColor: colors.background,
    }
})