import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"

import UserTable from "../components/UserTable"

const Main = () => {
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])

  const handlePress = () => {
    //validar si el input esta vacio antes de ejecutar la funcion
    if (username === "") {
      return
    }

    //add fetch api data
    fetch(`https://api.github.com/search/users?q=${username}&per_page=10`)
      .then((response) => response.json())
      .then((data) => setUsers(data.items))
      .catch((error) => console.log(error))
  }

  console.log("users", users)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users list</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        placeholderTextColor="grey"
        onChangeText={setUsername}
        value={username}
        onSubmitEditing={handlePress}
      />
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>
      {users.length > 0 && <UserTable users={users} />}
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  input: {
    width: "60%",
    height: 40,
    borderColor: "gray",
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  btn: {
    backgroundColor: "blue",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
})

export default Main
