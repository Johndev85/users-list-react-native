import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <View tyle={styles.container}>
      <Text style={{ color: "red", marginBottom: 20 }}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "600px",
    height: "auto",
    padding: 30,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default ErrorNotification
