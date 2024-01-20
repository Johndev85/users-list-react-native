import React from "react"

import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import UserList from "../components/UserList"

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" data-testid="statusbar" />
      <UserList data-testid="userlist" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Main
