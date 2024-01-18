import React from "react"

import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { Route, Switch, Redirect } from "react-router-native"

import UserList from "../components/UserList"
import UserDetails from "./UserDetails"

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Main
