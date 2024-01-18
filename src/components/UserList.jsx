import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"
import { Chase } from "react-native-animated-spinkit"

//components
import UserTable from "../components/UserTable"
import ErrorNotification from "../components/ErrorNotification"

const UserList = () => {
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const getDataUsers = () => {
    setLoading(true)
    setErrorMessage(null)
    setUsers([])

    if (username === "") {
      setErrorMessage("Please enter a username")
      setLoading(false)
      return
    }

    if (username.length < 4) {
      setErrorMessage("Username must be at least 4 characters")
      setLoading(false)
      return
    }

    if (username.toLowerCase() === "doublevpartners") {
      setErrorMessage('The username "doublevpartners" is not allowed.')
      setLoading(false)
      return
    }

    //add fetch api data
    fetch(`https://api.github.com/search/users?q=${username}&per_page=10`)
      .then((response) => response.json())
      .then((data) => setUsers(data.items))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))

    if (users.length > 0) {
      setLoading(false)
      setUsername([])
    }
  }

  console.log("users", users)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        placeholderTextColor="grey"
        onChangeText={setUsername}
        value={username}
        onSubmitEditing={getDataUsers}
      />
      {errorMessage && <ErrorNotification message={errorMessage} />}
      <Pressable style={styles.btn} onPress={getDataUsers}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>
      {loading && (
        <Chase
          size={40}
          color="#fff"
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      )}
      {users.length > 0 && <UserTable users={users} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "600px",
    height: "auto",
    padding: 30,
    backgroundColor: "#20232a",
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

export default UserList
